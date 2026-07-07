import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Projects } from "@/shared-sections/projects/components/organisms/Projects";
import { StatsBand } from "@/features/projects/components/StatsBand";
import { Testimonials } from "@/shared-sections/testimonials/components/Testimonials";
import { ContactForm } from "@/shared-sections/contact-form/components/ContactForm";

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
          eyebrow={t("eyebrow")}
          titleLead={t("titleLead")}
          titleAccent={t("titleAccent")}
          description={t("description")}
        />
        <Projects variant="contact" />
        <StatsBand />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
