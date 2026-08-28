"use client";

import { useState, type SubmitEvent } from "react";
import { ActionButton } from "@/common/call-to-actions/components/ActionButton";
import type { EmailFormProps } from "@/shared-sections/contact/types";

type Status = "idle" | "submitting" | "sent" | "error";

/* client island: only the form needs state, keeping the section server-rendered */
export const EmailForm = ({
  emailLabel,
  emailPlaceholder,
  submitLabel,
  sendingLabel,
  sentLabel,
  errorLabel,
}: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  /* render time: the server flags submissions faster than a human could type */
  const [renderedAt] = useState(() => Date.now());
  /* honeypot mirror: bots fill hidden fields, humans leave it empty */
  const [website, setWebsite] = useState("");

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, website, elapsedMs: Date.now() - renderedAt }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  const message = status === "sent" ? sentLabel : status === "error" ? errorLabel : "";

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <label htmlFor="contact-email" className="sr-only">
        {emailLabel}
      </label>
      <input
        id="contact-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={emailPlaceholder}
        className="rounded-full border border-white/30 bg-white/5 px-6 py-4 text-sm text-white outline-none placeholder:text-white/50 focus-visible:border-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
      />
      {/* honeypot: hidden from users and assistive tech, a lure for bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="sr-only"
      />
      <ActionButton
        label={status === "submitting" ? sendingLabel : submitLabel}
        disabled={status === "submitting"}
      />
      <p role="status" aria-live="polite" className="text-sm text-white/90 sm:col-span-2">
        {message}
      </p>
    </form>
  );
};
