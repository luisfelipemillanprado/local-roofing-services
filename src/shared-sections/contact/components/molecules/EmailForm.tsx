"use client";

import { useState, type SubmitEvent } from "react";
import { ActionButton } from "@/common/call-to-actions/components/ActionButton";
import type { EmailFormProps } from "@/shared-sections/contact/types";

/* client island: only the form needs state, the section stays server-rendered */
export const EmailForm = ({ emailLabel, emailPlaceholder, submitLabel, sentLabel }: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  /* mock submit: UI feedback only until a backend exists */
  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <label htmlFor="cta-email" className="sr-only">
        {emailLabel}
      </label>
      <input
        id="cta-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={emailPlaceholder}
        className="rounded-full border border-white/30 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/50 focus:border-primary-light focus:outline-none"
      />
      <ActionButton label={sent ? sentLabel : submitLabel} />
    </form>
  );
};
