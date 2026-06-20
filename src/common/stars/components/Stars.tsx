import { Star } from "lucide-react";
import type { StarsProps, StarsSize } from "@/common/stars/types";

/* Fixed five-star rating row. */
const sizes: Record<StarsSize, string> = {
  sm: "size-3.5 fill-current" /* hero, testimonials header */,
  base: "size-4 fill-current" /* testimonials card */,
};

export const Stars = ({ size = "sm" }: StarsProps) => (
  <span className="inline-flex gap-0.5 text-primary">
    <Star className={sizes[size]} />
    <Star className={sizes[size]} />
    <Star className={sizes[size]} />
    <Star className={sizes[size]} />
    <Star className={sizes[size]} />
  </span>
);
