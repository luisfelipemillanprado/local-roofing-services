import { Star } from "lucide-react";

/* Fixed five-star rating row. */
const star = "size-4 fill-current";

export const Stars = () => (
  <span className="inline-flex gap-0.5 text-primary">
    <Star className={star} />
    <Star className={star} />
    <Star className={star} />
    <Star className={star} />
    <Star className={star} />
  </span>
);
