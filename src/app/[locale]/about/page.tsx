import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/common/navbar/components/organisms/Navbar";
import { Footer } from "@/common/footer/components/organisms/Footer";
import { PageHeader } from "@/common/page-header/components/PageHeader";
import { About } from "@/common/about/components/organisms/About";
import { Values } from "@/features/about/components/organisms/Values";
import { Team } from "@/common/team/components/organisms/Team";
import { CTA } from "@/common/call-action/components/organisms/CTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "about-page.meta",
  });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("about-page.header");

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
        <About />
        <Values />
        <Team />
        <CTA tone="alt" />
      </main>
      <Footer />
    </>
  );
}
