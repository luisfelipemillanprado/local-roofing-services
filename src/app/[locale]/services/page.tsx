import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/sections/PageHeader";
import Services from "@/components/sections/Services";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Faq from "@/components/sections/Faq";
import CTA from "@/components/sections/CTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "ServicesPage.meta",
  });
  return { title: t("title"), description: t("description") };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("ServicesPage.header");

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
        <Services />
        <ProcessSteps />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
