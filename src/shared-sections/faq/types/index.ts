import type { faqData } from "@/data/sections/faq";

/* page variants + per-service slugs; the ctaHref bundle is not a variant */
type FaqVariant = Exclude<keyof typeof faqData, "ctaHref">;

export interface FaqProps {
  variant: FaqVariant;
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
