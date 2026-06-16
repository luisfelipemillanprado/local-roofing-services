"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";

type CTAProps = {
  /** Section background, used to keep each page's section alternation correct. */
  tone?: "base" | "alt";
};

export function CTA({ tone = "base" }: CTAProps) {
  const t = useTranslations("call-action");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const bg = tone === "alt" ? "bg-surface-2" : "bg-surface-base";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={`${bg} py-20 lg:py-28`}>
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-4xl bg-ink px-6 py-16 sm:px-12 lg:px-16">
          <div className="absolute inset-0 -z-10 opacity-30">
            <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-primary/40" />

          <div className="max-w-2xl text-center lg:text-left">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              {t("titleLead")}
              <span className="block text-primary">{t("titleAccent")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/70 mx-auto lg:mx-0">{t("body")}</p>

            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                {t("emailLabel")}
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                className="w-full flex-1 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder:text-white/50 backdrop-blur focus:border-primary-light focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark"
              >
                {sent ? (
                  <>
                    {t("sent")} <Check className="size-4" />
                  </>
                ) : (
                  <>
                    {t("getQuote")}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
