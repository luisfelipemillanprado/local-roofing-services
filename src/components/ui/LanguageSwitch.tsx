"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, type Locale } from "@/i18n/routing";

export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Common");
  const router = useRouter();
  const pathname = usePathname();
  const next: Locale = locale === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next })}
      aria-label={t("selectLanguage")}
      title={localeNames[next]}
      className={`inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[var(--fg)] transition-colors hover:text-[var(--color-primary)] ${className}`}
    >
      <Globe className="size-4" />
      {locale}
    </button>
  );
}
