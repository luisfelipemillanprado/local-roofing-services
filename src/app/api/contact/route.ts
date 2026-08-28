import { checkRateLimit } from "@/app/api/contact/rate-limit";
import { sendContactEmail } from "@/app/api/contact/send-email";

/* Node.js runtime: the AWS SES SDK needs Node APIs, not the edge runtime */
export const runtime = "nodejs";

/* a real email form never sends more than a few hundred bytes */
const MAX_BODY_BYTES = 2_000;
/* minimum time a human needs to fill the form; faster is almost certainly a bot */
const MIN_ELAPSED_MS = 2_500;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  email?: unknown;
  website?: unknown; /* honeypot: real users never see or fill this */
  elapsedMs?: unknown;
};

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

/* CSRF guard: browsers set Origin on cross-site POSTs, so require our own host */
function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ ok: false }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ ok: false }, { status: 415 });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ ok: false }, { status: 413 });
  }

  let payload: ContactPayload;
  try {
    payload = JSON.parse(raw) as ContactPayload;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  /* honeypot + time-trap: accept silently so bots get no signal to adapt */
  const trippedHoneypot = typeof payload.website === "string" && payload.website.length > 0;
  const tooFast = typeof payload.elapsedMs === "number" && payload.elapsedMs < MIN_ELAPSED_MS;
  if (trippedHoneypot || tooFast) {
    return Response.json({ ok: true });
  }

  if (!checkRateLimit(clientIp(request))) {
    return Response.json({ ok: false }, { status: 429 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > MAX_EMAIL_LENGTH) {
    return Response.json({ ok: false }, { status: 400 });
  }

  try {
    await sendContactEmail(email);
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
