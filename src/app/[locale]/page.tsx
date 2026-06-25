import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/common/navbar/components/organisms/Navbar";
import { Footer } from "@/common/footer/components/organisms/Footer";
import { Hero } from "@/features/home/components/organisms/Hero";
import { Marquee } from "@/features/home/components/organisms/Marquee";
import { About } from "@/common/about/components/organisms/About";
import { Services } from "@/common/service/components/Services";
import { WhyChoose } from "@/features/home/components/organisms/WhyChoose";
import { Projects } from "@/common/project/components/organisms/Projects";
import { Team } from "@/common/team/components/organisms/Team";
import { Testimonials } from "@/common/review/components/organisms/Testimonials";
import { Pricing } from "@/features/home/components/organisms/Pricing";
import { FormContact } from "@/common/form-contact/components/organisms/FormContact";

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
        <Services exploreHref="/services" limit={3} />
        <WhyChoose />
        <Projects exploreHref="/projects" limit={6} />
        <Team limit={3} />
        <Testimonials limit={6} />
        <Pricing />
        <FormContact tone="alt" />
      </main>
      <Footer />
    </>
  );
}
