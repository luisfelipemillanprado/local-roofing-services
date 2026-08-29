import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { buildContactLeadEmail, type ContactLead } from "@/app/api/contact/templates/contact-lead";

/*
 * SES transport for the contact lead. Config is read and validated per call:
 *   AWS_REGION   — SES region
 *   SES_FROM     — verified sender identity
 *   CONTACT_TO   — inbox that receives the lead
 * AWS credentials resolve via the standard chain (env vars, IAM role, ...).
 * The email content itself lives in ./templates/contact-lead.
 */
const CONNECTION_TIMEOUT_MS = 3_000;
const REQUEST_TIMEOUT_MS = 5_000;
const MAX_ATTEMPTS = 3;

type SesConfig = { region: string; from: string; to: string };

function readConfig(): SesConfig {
  const region = process.env.AWS_REGION;
  const from = process.env.SES_FROM;
  const to = process.env.CONTACT_TO;
  if (!region || !from || !to) {
    throw new Error("SES is not configured: AWS_REGION, SES_FROM and CONTACT_TO are required");
  }
  return { region, from, to };
}

/* one client per warm instance; created lazily on first send */
let client: SESv2Client | null = null;
function getClient(region: string): SESv2Client {
  client ??= new SESv2Client({
    region,
    maxAttempts: MAX_ATTEMPTS,
    requestHandler: {
      connectionTimeout: CONNECTION_TIMEOUT_MS,
      requestTimeout: REQUEST_TIMEOUT_MS,
    },
  });
  return client;
}

export async function sendContactEmail(lead: ContactLead): Promise<void> {
  const { region, from, to } = readConfig();
  const { subject, text } = buildContactLeadEmail(lead);

  await getClient(region).send(
    new SendEmailCommand({
      FromEmailAddress: `Roofpro Leads <${from}>`,
      Destination: { ToAddresses: [to] },
      ReplyToAddresses: [lead.email],
      Content: {
        Simple: {
          Subject: { Data: subject },
          Body: { Text: { Data: text } },
        },
      },
    }),
  );
}
