// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { SyncLocale } from "@/app/SyncLocale";
import { FloatingContact } from "@/common/floating-contact/components/organisms/FloatingContact";

const siteUrl = "https://roofpro.example.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// 1. Enable SSG at the Next.js 16 compiler level
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 2. Generate metadata statically (async)
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

// 3. Locale layout (no <html>, <body> or theme providers here)
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Guard against invalid locale routes
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Required for SSG: cache the locale so useTranslations() stays static.
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      {/* Client micro-component that injects lang="es/en" on the global <html> */}
      <SyncLocale locale={locale} />
      {children}
      {/* Floating quick-contact (WhatsApp + call), visible site-wide */}
      <FloatingContact />
    </NextIntlClientProvider>
  );
}
