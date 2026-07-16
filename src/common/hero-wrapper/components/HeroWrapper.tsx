import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { HeroWrapperProps } from "@/common/hero-wrapper/types";
import { Container } from "@/common/container/components/Container";

/* full-viewport dark intro band — image + scrims behind, content centered */
export const HeroWrapper = ({ children, image, imageAlt, id }: HeroWrapperProps) => (
  <section id={id} className="theme-dark relative isolate overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 -z-10">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurs.image}
        className="object-cover"
      />
      <div className="absolute inset-0 overlay-hero-side" />
      <div className="absolute inset-0 overlay-hero-bottom" />
    </div>

    {/* lg height = viewport minus the marquee, so both fit one screen */}
    <Container>
      <div className="grid min-h-svh content-center pt-35 pb-19 lg:min-h-[calc(100svh-3.5rem)]">
        {children}
      </div>
    </Container>
  </section>
);
