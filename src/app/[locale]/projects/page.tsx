import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/common/navbar/components/organisms/Navbar";
import { Footer } from "@/common/footer/components/organisms/Footer";
import { PageHeader } from "@/common/page-header/components/organisms/PageHeader";
import { Projects } from "@/common/project/components/organisms/Projects";
import { StatsBand } from "@/features/projects/components/organisms/StatsBand";
import { Testimonials } from "@/common/review/components/organisms/Testimonials";
import { CTA } from "@/common/call-action/components/organisms/CTA";

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
        <Projects />
        <StatsBand />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
