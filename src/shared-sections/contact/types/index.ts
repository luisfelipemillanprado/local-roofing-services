export interface ContactProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

export interface EmailFormProps {
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  sendingLabel: string; /* button label while the request is in flight */
  sentLabel: string; /* confirmation shown after a successful send */
  errorLabel: string; /* message shown if the request fails */
}
