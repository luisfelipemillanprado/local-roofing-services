export interface TestimonialsProps {
  variant: "viewAll" | "contact";
  limit?: number;
}

export interface TestimonialCardProps {
  avatar: string;
  quote: string;
  name: string;
  location: string;
  logo: string;
}

/* resolved per-card item for the list */
interface TestimonialCardItem extends Pick<TestimonialCardProps, "avatar" | "quote" | "name" | "location"> {
  key: string;
}

export interface TestimonialListProps {
  cards: TestimonialCardItem[];
  logo: string;
}

export interface RatingBadgeProps {
  score: string;
  count: string;
  reviews: string;
  logo: string;
}

export interface GoogleMarkProps {
  src: string;
}
