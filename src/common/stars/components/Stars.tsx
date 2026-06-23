import { Star } from "lucide-react";

/* Five-star rating row. */
export const Stars = () => (
  <span className="inline-flex gap-0.5 text-primary">
    <Star className="size-4 fill-current" />
    <Star className="size-4 fill-current" />
    <Star className="size-4 fill-current" />
    <Star className="size-4 fill-current" />
    <Star className="size-4 fill-current" />
  </span>
);
