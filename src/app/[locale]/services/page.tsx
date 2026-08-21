import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { pageHeaderData } from "@/data/sections/page-header";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { Services } from "@/shared-sections/services/components/organisms/Services";
import { Pitch } from "@/shared-sections/pitch/components/Pitch";
import { Testimonials } from "@/shared-sections/testimonials/components/organisms/Testimonials";
import { Faq } from "@/shared-sections/faq/components/organisms/Faq";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "metadata.pages.services",
  });
  return {
    title: t("title"),
    description: t("description"),
    ...(await routeMetadata(locale as Locale, "/services")),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("page-header.pages.services");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          titleLead={t(pageHeaderData.titleLeadKey)}
          titleAccent={t(pageHeaderData.titleAccentKey)}
          description={t(pageHeaderData.descriptionKey)}
          secondaryCta="projects"
        />
        <Marquee />
        <Services variant="contact" />
        <Pitch variant="process" />
        <Testimonials variant="contact" group="services" />
        <Faq variant="services" tone="base" />
        <Products tone="muted" limit={6} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
