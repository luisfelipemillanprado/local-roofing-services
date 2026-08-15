export interface TestimonialsProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
  limit?: number;
}

export interface TestimonialCardProps {
  avatar: string;
  quote: string;
  name: string;
  location: string;
}

/* resolved per-card item for the list */
interface TestimonialCardItem extends TestimonialCardProps {
  key: string;
}

export interface TestimonialListProps {
  cards: TestimonialCardItem[];
}

export interface RatingBadgeProps {
  score: string;
  count: string;
  reviews: string;
}
