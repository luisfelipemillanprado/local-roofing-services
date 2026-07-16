import { Star } from "lucide-react";
import type { StarsProps } from "@/common/stars/types";

/* five stars, filled up to the rounded rating; all filled by default */
const STARS = [1, 2, 3, 4, 5];

export const Stars = ({ rating = 5 }: StarsProps) => (
  <span aria-hidden className="inline-grid grid-flow-col gap-1">
    {STARS.map((star) => (
      <Star
        key={star}
        className={`size-4 ${star <= Math.round(rating) ? "fill-primary text-primary" : "text-foreground-muted"}`}
      />
    ))}
  </span>
);
