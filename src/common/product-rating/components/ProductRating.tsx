import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import type { ProductRatingProps } from "@/common/product-rating/types";

/* star row + the count that names it */
export const ProductRating = ({ rating, label, size }: ProductRatingProps) => (
  <div className="grid grid-flow-col items-center justify-start gap-2">
    <Stars rating={rating} />
    <Text as="span" size={size} tone="muted" text={label} />
  </div>
);
