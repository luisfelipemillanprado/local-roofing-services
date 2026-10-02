import { AvailabilityDot } from "@/common/availability-dot/components/AvailabilityDot";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { ProductPriceProps } from "@/features/shop/detail/types";

/* price, unit and stock state share one row, all seated on the price baseline */
export const ProductPrice = ({ price, unit, availability, availabilityLabel }: ProductPriceProps) => (
  <div className="grid grid-flow-col items-end justify-start gap-2">
    <TextNumber size="display" text={price} />
    <span className="mb-1">
      <Text as="span" size="body" tone="muted" text={`/ ${unit}`} />
    </span>
    {/* inline-grid keeps the dot wrapper off a text baseline; mb-1 works either way */}
    <span className="mb-1 ml-3 inline-grid">
      <AvailabilityDot availability={availability} label={availabilityLabel} size="body" />
    </span>
  </div>
);
