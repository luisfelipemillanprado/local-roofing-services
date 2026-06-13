import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";

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
