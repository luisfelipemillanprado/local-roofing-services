import { ArrowRight, Star } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import type { ProductCardProps } from "@/shared-sections/products/types";

/* five stars, filled up to the rounded rating */
const STARS = [1, 2, 3, 4, 5];

export const ProductCard = ({
  image,
  title,
  price,
  unit,
  rating,
  reviews,
  quoteLabel,
  quoteHref,
  delay = 0,
}: ProductCardProps) => (
  <Reveal delay={delay}>
    <article className="group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-card border border-line bg-surface-panel shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      <Media
        src={image}
        alt={title}
        shape="wide"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="grid content-start gap-3 px-5.5 py-4.5">
        <Title as="h3" size="card" weight="bold" truncate text={title} />
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
          <div className="grid gap-2">
            <div className="grid grid-flow-col items-center justify-start gap-1">
              {STARS.map((star) => (
                <Star
                  key={star}
                  aria-hidden
                  className={`size-4 ${
                    star <= Math.round(rating) ? "fill-primary text-primary" : "text-foreground-muted"
                  }`}
                />
              ))}
              <span className="ml-1">
                <Text as="span" size="caption" tone="muted" text={`(${reviews})`} />
              </span>
            </div>
            <div className="grid grid-flow-col items-end justify-start gap-1.5">
              <TextNumber size="stat" text={price} />
              <span className="mb-0.5">
                <Text as="span" size="caption" tone="muted" text={`/ ${unit}`} />
              </span>
            </div>
          </div>
          <a
            href={quoteHref}
            aria-label={quoteLabel}
            className="grid size-10 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-1"
          >
            <ArrowRight className="size-5 -rotate-45" />
          </a>
        </div>
      </div>
    </article>
  </Reveal>
);
