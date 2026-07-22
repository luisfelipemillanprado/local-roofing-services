import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { Projects } from "@/shared-sections/projects/components/organisms/Projects";
import { CaseStudy } from "@/features/projects/components/CaseStudy";
import { Testimonials } from "@/shared-sections/testimonials/components/organisms/Testimonials";
import { Faq } from "@/shared-sections/faq/components/organisms/Faq";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "projects-page.meta",
  });
  return { title: t("title"), description: t("description") };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("projects-page.header");

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          titleLead={t("titleLead")}
          titleAccent={t("titleAccent")}
          description={t("description")}
          secondaryCta="services"
        />
        <Marquee />
        <Projects variant="contact" />
        <CaseStudy />
        <Testimonials variant="contact" />
        <Faq variant="projects" tone="base" />
        <Products tone="muted" limit={6} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
