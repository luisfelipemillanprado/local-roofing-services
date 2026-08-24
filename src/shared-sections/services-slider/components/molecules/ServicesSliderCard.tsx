import Image from "next/image";
import { blurs } from "@/data/blurs";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ServicesSliderCardProps } from "@/shared-sections/services-slider/types";

/* parallax photo card: the image layer shifts on scroll, copy + CTAs stay fixed on top */
export const ServicesSliderCard = ({
  image,
  href,
  name,
  description,
  viewDetails,
  contact,
}: ServicesSliderCardProps) => (
  <article className="relative aspect-4/5 overflow-hidden rounded-2xl md:aspect-video">
    {/* parallax layer — the track translates this horizontally on scroll */}
    <div data-parallax-layer className="flex h-full w-full justify-center">
      {/* oversized (115% + gap*2) and centered so the shift never exposes an edge */}
      <div className="relative flex-[0_0_calc(115%+3rem)]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 82vw, 72vw"
          placeholder="blur"
          blurDataURL={blurs.image}
          className="object-cover"
        />
      </div>
    </div>

    <div className="absolute inset-0 overlay-card" />

    <div className="absolute inset-0 grid content-between gap-6 p-6 sm:p-7">
      <div className="grid gap-2">
        <Title as="h3" size="card" weight="bold" tone="white" text={name} />
        <Text size="body" tone="white" text={description} />
      </div>
      <div className="grid gap-3 md:grid-flow-col md:justify-start">
        <Button href={href} variant="primary">
          {viewDetails}
        </Button>
        <Button href="#contact" variant="ghost">
          {contact}
        </Button>
      </div>
    </div>
  </article>
);
