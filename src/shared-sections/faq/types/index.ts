import type { faqData } from "@/data/sections/faq";

/* page variants + per-service slugs; the heading and ctaHref bundles are not variants */
type FaqVariant = Exclude<keyof typeof faqData, "ctaHref" | "heading">;

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
