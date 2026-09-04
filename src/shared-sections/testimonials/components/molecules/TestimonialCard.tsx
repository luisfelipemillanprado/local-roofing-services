import Image from "next/image";
import { Quote } from "lucide-react";
import { GoogleMark } from "@/shared-sections/testimonials/components/atoms/GoogleMark";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import { blurs } from "@/data/blurs";
import type { TestimonialCardProps } from "@/shared-sections/testimonials/types";

export const TestimonialCard = ({ avatar, quote, name, location, logo }: TestimonialCardProps) => (
  <figure className="grid h-full grid-rows-[auto_1fr_auto] gap-5 rounded-card border border-line bg-surface-panel p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
    <div className="grid grid-flow-col items-center justify-between">
      <Stars />
      <Quote className="size-8 fill-surface-muted text-surface-muted" />
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
      <GoogleMark src={logo} />
    </figcaption>
  </figure>
);
