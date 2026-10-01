import { Text } from "@/common/text/components/Text";
import type { AvailabilityDotProps, ProductAvailability } from "@/common/availability-dot/types";

/* dot color per stock state */
const dots: Record<ProductAvailability, string> = {
  "in-stock": "bg-malachite",
  "limited-stock": "bg-primary",
  "out-of-stock": "bg-foreground-muted",
};

/* stock state: colored dot + its label */
export const AvailabilityDot = ({ availability, label, size }: AvailabilityDotProps) => (
  <span className="inline-grid grid-flow-col items-center gap-2">
    <span className={`size-2 rounded-full ${dots[availability]}`} />
    <Text as="span" size={size} tone="muted" text={label} />
  </span>
);
