import { checkRateLimit } from "@/app/api/contact/rate-limit";
import { sendContactEmail } from "@/app/api/contact/send-email";
import type { Locale } from "@/i18n/routing";

/* Node.js runtime: the AWS SES SDK needs Node APIs, not the edge runtime */
export const runtime = "nodejs";

/* a real email form never sends more than a couple hundred bytes */
const MAX_BODY_BYTES = 2_000;
/* minimum time a human needs to fill the form; faster is almost certainly a bot */
const MIN_ELAPSED_MS = 2_500;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  email?: unknown;
  contact_time?: unknown; /* honeypot: real users never see or fill this */
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

/* lead context from the referring page — no client payload contract change */
function leadContext(request: Request): { locale: Locale; page: string } {
  const referer = request.headers.get("referer") ?? "";
  try {
    const { pathname } = new URL(referer);
    const locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
    return { locale, page: referer };
  } catch {
    return { locale: "en", page: referer || "unknown" };
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return Response.json({ ok: false }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ ok: false }, { status: 415 });
  }

  /* reject oversized payloads up front when the length is declared... */
  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return Response.json({ ok: false }, { status: 413 });
  }

  const raw = await request.text();
  /* ...and again by real byte size, covering a missing or wrong Content-Length */
  if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
    return Response.json({ ok: false }, { status: 413 });
  }

  let payload: ContactPayload;
  try {
    payload = JSON.parse(raw) as ContactPayload;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  /* honeypot + time-trap: accept silently so bots get no signal to adapt */
  const trippedHoneypot = typeof payload.contact_time === "string" && payload.contact_time.length > 0;
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

  const { locale, page } = leadContext(request);
  try {
    await sendContactEmail({ email, locale, page, submittedAt: new Date().toISOString() });
  } catch (error) {
    /* log the real cause with request context; keep the client response generic */
    console.error("[contact] failed to send lead", { locale, page, error });
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
