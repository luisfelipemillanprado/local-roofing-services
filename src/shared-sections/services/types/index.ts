export interface ServicesProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
  limit?: number;
}

export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  viewDetails: string;
  href: string;
}

/* resolved per-card item for the list */
interface ServiceCardItem {
  key: string;
  image: string;
  title: string;
  description: string;
  href: string;
}

export interface ServiceListProps {
  cards: ServiceCardItem[];
  viewDetails: string;
}
