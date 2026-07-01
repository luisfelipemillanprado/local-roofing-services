import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Services } from "@/shared-sections/services/components/organisms/Services";
import { ProcessSteps } from "@/features/services/components/ProcessSteps";
import { Faq } from "@/features/services/components/Faq";
import { ContactForm } from "@/shared-sections/contact-form/components/ContactForm";

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
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
