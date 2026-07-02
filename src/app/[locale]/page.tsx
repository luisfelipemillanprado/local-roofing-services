import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/Footer";
import { Hero } from "@/features/home/components/organisms/Hero";
import { Marquee } from "@/features/home/components/organisms/Marquee";
import { About } from "@/shared-sections/about/components/organisms/About";
import { Services } from "@/shared-sections/services/components/organisms/Services";
import { WhyChoose } from "@/features/home/components/organisms/WhyChoose";
import { Projects } from "@/shared-sections/projects/components/Projects";
import { Team } from "@/shared-sections/team/components/Team";
import { Testimonials } from "@/shared-sections/testimonials/components/Testimonials";
import { Pricing } from "@/features/home/components/organisms/Pricing";
import { ContactForm } from "@/shared-sections/contact-form/components/ContactForm";

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
        <About />
        <Services variant="summary" limit={4} />
        <WhyChoose />
        <Projects exploreHref="/projects" limit={6} />
        <Team limit={3} />
        <Testimonials limit={6} />
        <Pricing />
        <ContactForm tone="alt" />
      </main>
      <Footer />
    </>
  );
}
