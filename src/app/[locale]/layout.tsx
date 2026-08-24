import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { SyncLocale } from "@/app/SyncLocale";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { FloatingContact } from "@/layout/floating-contact/components/organisms/FloatingContact";

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
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: { index: true, follow: true },
    /* home canonical/alternates/og:url; pages override with their own route */
    ...(await routeMetadata(locale as Locale, "/")),
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
      {/* Site-wide chrome: shared across every locale route */}
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* Site-wide quick-contact */}
      <FloatingContact />
    </NextIntlClientProvider>
  );
}
