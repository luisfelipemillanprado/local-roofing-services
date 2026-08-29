import type { Locale } from "@/i18n/routing";

/* input for the internal lead-notification email */
export interface ContactLead {
  email: string;
  locale: Locale;
  page: string;
  submittedAt: string;
}

/* rendered email parts, transport-agnostic (SES, SMTP, ...) */
export interface EmailContent {
  subject: string;
  text: string;
}

/* localized labels for the notification (EN/ES) */
const copy = {
  en: {
    subject: "New quote request",
    email: "Email",
    submitted: "Submitted",
    locale: "Locale",
    page: "Page",
  },
  es: {
    subject: "Nueva solicitud de cotización",
    email: "Correo",
    submitted: "Enviado",
    locale: "Idioma",
    page: "Página",
  },
} as const;

/* format the lead email; text only for now, HTML can be added without touching SES */
export function buildContactLeadEmail(lead: ContactLead): EmailContent {
  const t = copy[lead.locale];
  const text = [
    t.subject,
    "",
    `${t.email}: ${lead.email}`,
    `${t.submitted}: ${lead.submittedAt}`,
    `${t.locale}: ${lead.locale}`,
    `${t.page}: ${lead.page}`,
  ].join("\n");

  return { subject: t.subject, text };
}
