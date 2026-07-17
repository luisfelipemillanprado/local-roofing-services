export interface FaqProps {
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
}

/* resolved per-question item for the list */
interface FaqItem {
  key: string;
  question: string;
  answer: string;
}

export interface FaqListProps {
  items: FaqItem[];
}
