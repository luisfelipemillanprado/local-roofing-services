"use client";

import { useTransition } from "react";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, type Locale } from "@/i18n/routing";
import { Text } from "@/common/text/components/Text";

export const LanguageSwitch = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const next: Locale = locale === "en" ? "es" : "en";

  // Transition avoids a brief flash of the default theme while the new locale loads.
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
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface-muted px-3 text-foreground transition-colors hover:text-primary disabled:opacity-60"
    >
      <Globe className="size-4.25" />
      <Text
        as="span"
        size="label"
        tone="default"
        weight="bold"
        tracking="subtle"
        text={locale.toUpperCase()}
      />
    </button>
  );
};
