import Image from "next/image";
import { Quote } from "lucide-react";
import { GoogleMark } from "@/shared-sections/testimonials/components/atoms/GoogleMark";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import { blurs } from "@/data/blurs";
import type { TestimonialCardProps } from "@/shared-sections/testimonials/types";

export const TestimonialCard = ({ avatar, quote, name, location, delay = 0 }: TestimonialCardProps) => (
  <Reveal delay={delay}>
    <figure className="grid h-full grid-rows-[auto_1fr_auto] gap-5 rounded-card border border-line bg-surface-panel p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      <div className="grid grid-flow-col items-center justify-between">
        <Stars />
        <Quote className="size-8 text-surface-muted" fill="currentColor" />
      </div>
      <blockquote>
        <Text size="body" tone="muted" text={`“${quote}”`} />
      </blockquote>
      <figcaption className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-line pt-5">
        <span className="relative size-11 overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt={name}
            placeholder="blur"
            blurDataURL={blurs.avatar}
            fill
            sizes="44px"
            className="object-cover"
          />
        </span>
        <div className="grid min-w-0">
          <Text size="body" weight="bold" truncate text={name} />
          <Text size="body" tone="muted" truncate text={location} />
        </div>
        <GoogleMark />
      </figcaption>
    </figure>
  </Reveal>
);
