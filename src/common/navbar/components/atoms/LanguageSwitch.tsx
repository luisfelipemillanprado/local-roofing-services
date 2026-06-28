"use client";

import { useTransition } from "react";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, routing, type Locale } from "@/i18n/routing";
import { Text } from "@/common/text/components/Text";

export const LanguageSwitch = () => {
  const locale = useLocale() as Locale;
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const { locales } = routing;
  const next: Locale = locales[(locales.indexOf(locale) + 1) % locales.length];

  /* Transition avoids a theme flash while the new locale loads. */
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
      className="group inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface-muted px-3 disabled:opacity-60"
    >
      <Globe className="size-4.25 text-foreground transition-colors group-hover:text-primary" />
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
