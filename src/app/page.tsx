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
import Coupons from "@/components/sections/Coupons";
import Pricing from "@/components/sections/Pricing";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyChoose />
        <Projects />
        <Team />
        <Testimonials />
        <Coupons />
        <Pricing />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
