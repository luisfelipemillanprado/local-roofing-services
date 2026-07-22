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
  delay?: number;
}

/* resolved per-card item for the list */
interface TestimonialCardItem extends TestimonialCardProps {
  key: string;
}

export interface TestimonialListProps {
  cards: TestimonialCardItem[];
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}

export interface RatingBadgeProps {
  score: string;
  count: string;
  reviews: string;
}
