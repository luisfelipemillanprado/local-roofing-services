"use client";

import { useTransition } from "react";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, type Locale } from "@/i18n/routing";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const next: Locale = locale === "en" ? "es" : "en";

  // Wrapping the navigation in a transition keeps the current UI (and its theme)
  // mounted until the new locale tree is ready, then commits atomically. Without
  // it, React commits an intermediate render where next-themes briefly falls back
  // to the default theme — a quick flash of the opposite theme.
  const switchLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      disabled={isPending}
      aria-label={t("selectLanguage")}
      title={localeNames[next]}
      className={`inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[var(--fg)] transition-colors hover:text-[var(--color-primary)] disabled:opacity-60 ${className}`}
    >
      <Globe className="size-4" />
      {locale}
    </button>
  );
}
