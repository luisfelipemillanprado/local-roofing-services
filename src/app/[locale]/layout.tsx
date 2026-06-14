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

// 1. Garantiza el SSG a nivel del compilador de Next.js 16
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 2. Genera los Metadatos de forma estática asíncrona
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

// 3. Layout de Idiomas (No lleva <html>, <body> ni proveedores de tema)
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validación de seguridad para rutas inválidas
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // INDISPENSABLE para SSG: Escribe el locale en el caché interno
  // para que useTranslations() no recurra a llamadas dinámicas de cabeceras HTTP.
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      {/* Micro-componente cliente para inyectar lang="es/en" en el HTML global */}
      <SyncLocale locale={locale} />
      {children}
      {/* Contacto rápido flotante (WhatsApp + llamada), visible en todo el sitio */}
      <FloatingContact />
    </NextIntlClientProvider>
  );
}
