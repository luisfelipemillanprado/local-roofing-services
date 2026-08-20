/* page variants + per-service slugs; selects the faqData bundle */
type FaqVariant =
  | "services"
  | "projects"
  | "about"
  | "repair"
  | "replacement"
  | "storm"
  | "inspections"
  | "gutters"
  | "commercial"
  | "residential"
  | "metal"
  | "tile"
  | "flat"
  | "skylights"
  | "solar";

export interface FaqProps {
  variant: FaqVariant;
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

export interface FaqCardProps {
  question: string;
  answer: string;
}

/* resolved per-question item for the list */
interface FaqCardItem extends Pick<FaqCardProps, "question" | "answer"> {
  key: string;
}

export interface FaqListProps {
  cards: FaqCardItem[];
}
