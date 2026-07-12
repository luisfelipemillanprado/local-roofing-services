export interface ContactProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

export interface EmailFormProps {
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  sentLabel: string; /* button label while the mock confirmation shows */
}
