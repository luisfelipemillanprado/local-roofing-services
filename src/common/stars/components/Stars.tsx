import { Star } from "lucide-react";

/* five filled stars, decorative */
const STARS = [1, 2, 3, 4, 5];

export const Stars = () => (
  <span aria-hidden className="inline-grid grid-flow-col gap-0.5">
    {STARS.map((star) => (
      <Star key={star} className="size-4 fill-primary text-primary" />
    ))}
  </span>
);
