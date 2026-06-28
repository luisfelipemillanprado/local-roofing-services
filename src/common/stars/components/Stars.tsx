import { Star } from "lucide-react";

/* Five-star rating row. */
export const Stars = () => (
  <span className="inline-grid grid-flow-col gap-0.5">
    <Star className="size-4 fill-primary text-primary" />
    <Star className="size-4 fill-primary text-primary" />
    <Star className="size-4 fill-primary text-primary" />
    <Star className="size-4 fill-primary text-primary" />
    <Star className="size-4 fill-primary text-primary" />
  </span>
);
