import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

/* per-route canonical, hreflang alternates and og:url via next-intl getPathname */
export const routeMetadata = async (locale: Locale, href: string): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const url = getPathname({ href, locale });

  return {
    alternates: {
      canonical: url,
      languages: Object.fromEntries(routing.locales.map((l) => [l, getPathname({ href, locale: l })])),
    },
    openGraph: {
      type: "website",
      url,
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: "Roofpro",
      locale,
    },
  };
};
