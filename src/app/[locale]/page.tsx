import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Navbar } from "@/common/navbar/components/organisms/Navbar";
import { Footer } from "@/common/footer/components/organisms/Footer";
import { Hero } from "@/features/home/components/organisms/Hero";
import { Marquee } from "@/features/home/components/organisms/Marquee";
import { About } from "@/common/about/components/organisms/About";
import { Services } from "@/common/service/components/organisms/Services";
import { WhyChoose } from "@/features/home/components/organisms/WhyChoose";
import { Projects } from "@/common/project/components/organisms/Projects";
import { Team } from "@/common/team/components/organisms/Team";
import { Testimonials } from "@/common/review/components/organisms/Testimonials";
import { Pricing } from "@/features/home/components/organisms/Pricing";
import { Blog } from "@/features/home/components/organisms/Blog";
import { CTA } from "@/common/call-action/components/organisms/CTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);
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
        <Testimonials limit={3} />
        <Pricing />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
