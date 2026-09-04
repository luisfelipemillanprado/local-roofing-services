import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { Projects } from "@/shared-sections/projects/components/organisms/Projects";
import { Testimonials } from "@/shared-sections/testimonials/components/organisms/Testimonials";
import { Faq } from "@/shared-sections/faq/components/organisms/Faq";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "metadata.pages.projects",
  });
  return {
    title: t("title"),
    description: t("description"),
    ...(await routeMetadata(locale as Locale, "/projects")),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("page-header.pages.projects");

  return (
    <>
      <PageHeader
        titleLead={t(pageHeaderData.titleLeadKey)}
        titleAccent={t(pageHeaderData.titleAccentKey)}
        description={t(pageHeaderData.descriptionKey)}
        secondaryCta="services"
      />
      <Marquee />
      {/* content sections alternate base/muted surfaces */}
      <Projects variant="contact" tone="base" />
      <Testimonials variant="contact" tone="muted" group="projects" />
      <Faq variant="projects" tone="base" />
      <Products tone="muted" limit={6} />
      <Contact />
    </>
  );
}
