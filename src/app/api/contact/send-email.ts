import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

/*
 * Lead delivery through Amazon SES. Config comes from env so the form works end
 * to end the moment SES is provisioned — no code change needed:
 *   AWS_REGION   — SES region
 *   SES_FROM     — verified sender identity
 *   CONTACT_TO   — inbox that receives the lead
 * AWS credentials resolve via the standard chain (env vars, IAM role, ...).
 */
const region = process.env.AWS_REGION;
const from = process.env.SES_FROM;
const to = process.env.CONTACT_TO;

export async function sendContactEmail(email: string): Promise<void> {
  if (!region || !from || !to) {
    /* not provisioned yet: no-op in dev so the demo flows, fail loudly in prod */
    if (process.env.NODE_ENV === "production") {
      throw new Error("SES is not configured");
    }
    console.info(`[contact] SES not configured — skipping send for ${email}`);
    return;
  }

  const client = new SESv2Client({ region });
  await client.send(
    new SendEmailCommand({
      FromEmailAddress: from,
      Destination: { ToAddresses: [to] },
      ReplyToAddresses: [email],
      Content: {
        Simple: {
          Subject: { Data: "New quote request" },
          Body: { Text: { Data: `New quote request from ${email}` } },
        },
      },
    }),
  );
}
