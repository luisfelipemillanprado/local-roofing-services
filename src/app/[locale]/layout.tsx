import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { SyncLocale } from "@/app/SyncLocale";
import { FloatingContact } from "@/layout/floating-contact/components/FloatingContact";

const siteUrl = "https://roofpro.example.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

/* SSG: prerender each locale */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* Static metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "metadata",
  });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "roofing",
      "roof repair",
      "roof installation",
      "commercial roofing",
      "residential roofing",
      "energy efficient roofing",
    ],
    authors: [{ name: "Roofpro" }],
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        es: "/es",
      },
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: "Roofpro",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: { index: true, follow: true },
  };
}

/* Locale layout; <html>/theme live in root */
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  /* Reject unknown locales */
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  /* Cache locale for static rendering */
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      {/* Syncs <html lang> client-side */}
      <SyncLocale locale={locale} />
      {children}
      {/* Site-wide quick-contact */}
      <FloatingContact />
    </NextIntlClientProvider>
  );
}
