export interface ServicesProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
  limit?: number;
  mobileCarousel?: boolean /* mobile shows a carousel of the cards; desktop stays the grid */;
}

export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  viewDetails: string;
  href: string;
}

/* resolved per-card item for the list */
interface ServiceCardItem extends Pick<ServiceCardProps, "image" | "title" | "description" | "href"> {
  key: string;
}

export interface ServiceListProps {
  cards: ServiceCardItem[];
  viewDetails: string;
}
