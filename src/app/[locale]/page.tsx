import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { Hero } from "@/features/home/components/organisms/Hero";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { About } from "@/shared-sections/about/components/organisms/About";
import { Services } from "@/shared-sections/services/components/organisms/Services";
import { WhyChoose } from "@/features/home/components/organisms/WhyChoose";
import { Projects } from "@/shared-sections/projects/components/organisms/Projects";
import { Team } from "@/shared-sections/team/components/organisms/Team";
import { Testimonials } from "@/shared-sections/testimonials/components/organisms/Testimonials";
import { Pricing } from "@/shared-sections/pricing/components/organisms/Pricing";
import { Products } from "@/shared-sections/products/components/organisms/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  /* use() unwraps params without async */
  const { locale } = use(params);
  /* Cache locale for static rendering */
  setRequestLocale(locale as Locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About variant="learnMore" />
        <Services variant="viewAll" limit={6} />
        <WhyChoose />
        <Projects variant="viewAll" limit={6} />
        <Team variant="viewAll" limit={6} />
        <Testimonials variant="viewAll" limit={6} />
        <Pricing variant="viewAll" />
        <Products tone="muted" limit={6} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
