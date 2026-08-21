import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { PageHeader } from "@/shared-sections/page-header/components/PageHeader";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { About } from "@/shared-sections/about/components/organisms/About";
import { Services } from "@/shared-sections/services/components/organisms/Services";
import { Pitch } from "@/shared-sections/pitch/components/Pitch";
import { Projects } from "@/shared-sections/projects/components/organisms/Projects";
import { Testimonials } from "@/shared-sections/testimonials/components/organisms/Testimonials";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";
import { pageHeaderData } from "@/data/sections/page-header";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  /* Cache locale for static rendering */
  setRequestLocale(locale as Locale);
  const t = await getTranslations("page-header.pages.home");

  return (
    <>
      <Navbar />
      <main>
        {/* shared hero band with the home's own copy, image and anchor */}
        <PageHeader
          id="home"
          image="home"
          titleLead={t(pageHeaderData.titleLeadKey)}
          titleAccent={t(pageHeaderData.titleAccentKey)}
          description={t(pageHeaderData.descriptionKey)}
          secondaryCta="work"
        />
        <Marquee />
        <About variant="learnMore" />
        <Services variant="viewAll" limit={6} />
        <Pitch variant="why-choose" />
        <Projects variant="viewAll" limit={6} />
        <Testimonials variant="viewAll" tone="base" group="company" />
        <Products tone="muted" limit={6} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
