import { LiveDot } from "@/common/animations/components/LiveDot";
import { Text } from "@/common/text/components/Text";
import type { AvailabilityDotProps, ProductAvailability } from "@/common/availability-dot/types";
import type { LiveDotColor } from "@/common/animations/types";

/* dot color per stock state */
const dots: Record<ProductAvailability, LiveDotColor> = {
  "in-stock": "malachite",
  "limited-stock": "citrine",
  "out-of-stock": "cinnabar",
};

/* stock state: live dot + its label */
export const AvailabilityDot = ({ availability, label, size }: AvailabilityDotProps) => (
  <span className="inline-grid grid-flow-col items-center gap-2">
    <LiveDot color={dots[availability]} />
    <Text as="span" size={size} tone="muted" text={label} />
  </span>
);
