import type { TextSize } from "@/common/text/types";

export type ProductAvailability = "in-stock" | "limited-stock" | "out-of-stock";

export interface AvailabilityDotProps {
  availability: ProductAvailability;
  label: string;
  size: TextSize;
}
