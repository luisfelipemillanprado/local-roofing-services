import { ArrowLink } from "@/common/call-to-actions/components/ArrowLink";
import { Media } from "@/common/media/components/Media";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import type { ProductCardProps, ProductAvailability } from "@/common/product-card/types";

/* availability dot color per state */
const dots: Record<ProductAvailability, string> = {
  "in-stock": "bg-malachite",
  "limited-stock": "bg-primary",
  "out-of-stock": "bg-foreground-muted",
};

export const ProductCard = ({
  title,
  brand,
  image,
  priceLabel,
  unit,
  rating,
  reviews,
  availability,
  availabilityLabel,
  viewLabel,
  href,
}: ProductCardProps) => (
  <article className="group grid h-full overflow-hidden rounded-2xl border border-line bg-surface-panel shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
    <Media
      src={image}
      alt={title}
      shape="wide"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />

    <div className="grid grid-cols-[1fr_auto] items-center gap-4 px-5.5 py-4.5">
      <div className="grid min-w-0 gap-2">
        <Title as="h3" size="card" weight="bold" truncate text={title} />
        <div className="grid grid-flow-col items-center justify-start gap-3">
          <Text as="span" size="note" tone="muted" text={brand} />
          <div className="inline-grid grid-flow-col items-center gap-2">
            <span className={`size-2 rounded-full ${dots[availability]}`} />
            <Text as="span" size="note" tone="muted" text={availabilityLabel} />
          </div>
        </div>
        <div className="grid grid-flow-col items-center justify-start gap-2">
          <Stars rating={rating} />
          <Text as="span" size="caption" tone="muted" text={`${rating} (${reviews})`} />
        </div>
        <div className="grid grid-flow-col items-end justify-start gap-1.5">
          <TextNumber size="price" text={priceLabel} />
          <span className="mb-0.5">
            <Text as="span" size="caption" tone="muted" text={`/ ${unit}`} />
          </span>
        </div>
      </div>

      <ArrowLink href={href} label={viewLabel} pulse />
    </div>
  </article>
);
