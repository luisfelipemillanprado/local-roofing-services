"use client";

import { Globe } from "lucide-react";
import { useLocale } from "@/i18n/provider";
import { content, localeNames } from "@/i18n/content";

export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const next = locale === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={content[locale].ui.selectLanguage}
      title={localeNames[next]}
      className={`inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[var(--fg)] transition-colors hover:text-[var(--color-primary)] ${className}`}
    >
      <Globe className="size-4" />
      {locale}
    </button>
  );
}
