import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { About } from "@/shared-sections/about/components/organisms/About";
import { Pitch } from "@/shared-sections/pitch/components/Pitch";
import { Projects } from "@/shared-sections/projects/components/organisms/Projects";
import { Testimonials } from "@/shared-sections/testimonials/components/organisms/Testimonials";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Faq } from "@/shared-sections/faq/components/organisms/Faq";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "metadata.pages.about",
  });
  return {
    title: t("title"),
    description: t("description"),
    ...(await routeMetadata(locale as Locale, "/about")),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("page-header.pages.about");

  return (
    <>
      <PageHeader
        titleLead={t(pageHeaderData.titleLeadKey)}
        titleAccent={t(pageHeaderData.titleAccentKey)}
        description={t(pageHeaderData.descriptionKey)}
        secondaryCta="services"
      />
      <Marquee />
      <About variant="contact" />
      <Pitch variant="values" tone="muted" />
      <Projects variant="viewAll" tone="base" limit={6} />
      <Testimonials variant="contact" group="about" />
      <Faq variant="about" tone="base" />
      <Products tone="muted" limit={6} />
      <Contact />
    </>
  );
}
