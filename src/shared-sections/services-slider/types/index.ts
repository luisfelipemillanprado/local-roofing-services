export interface ServicesSliderProps {
  variant: "viewAll" | "contact" /* which shared CTA to render (same as Services) */;
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
  limit?: number;
}

/* one resolved service for the slider track */
interface ServicesSliderItem {
  key: string;
  image: string;
  href: string;
  name: string;
  description: string;
}

export interface ServicesSliderCardProps {
  image: string;
  href: string;
  name: string;
  description: string;
  viewDetails: string;
  contact: string;
}

export interface ServicesSliderTrackProps {
  cards: ServicesSliderItem[];
  viewDetails: string;
  contact: string;
  previous: string /* prev arrow aria-label */;
  next: string /* next arrow aria-label */;
}
