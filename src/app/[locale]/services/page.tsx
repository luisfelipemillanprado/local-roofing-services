import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/common/navbar/components/organisms/Navbar";
import { Footer } from "@/common/footer/components/organisms/Footer";
import { PageHeader } from "@/common/page-header/components/organisms/PageHeader";
import { Services } from "@/common/service/components/organisms/Services";
import { ProcessSteps } from "@/features/services/components/organisms/ProcessSteps";
import { Faq } from "@/features/services/components/organisms/Faq";
import { CTA } from "@/common/call-action/components/organisms/CTA";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "services-page.meta",
  });
  return { title: t("title"), description: t("description") };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("services-page.header");

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
