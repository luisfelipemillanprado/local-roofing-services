import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { About } from "@/shared-sections/about/components/organisms/About";
import { Values } from "@/features/about/components/Values";
import { Team } from "@/shared-sections/team/components/organisms/Team";
import { Testimonials } from "@/shared-sections/testimonials/components/organisms/Testimonials";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

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
        <Marquee />
        <About variant="contact" />
        <Values />
        <Team variant="contact" />
        <Testimonials variant="contact" />
        <Products limit={6} />
        <Contact tone="muted" />
      </main>
      <Footer />
    </>
  );
}
