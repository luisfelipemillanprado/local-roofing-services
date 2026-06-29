import type { TextNumberProps, TextNumberSize, TextNumberTone } from "@/common/text/types";

/* Display scale for metrics (smallest tier shares Text's 14px). */
const sizes: Record<TextNumberSize, string> = {
  base: "text-sm" /* 14px — inline numbers: testimonials rating, process steps */,
  stat: "text-xl" /* 20px — WhyChoose stats */,
  headline: "text-2xl m390:text-[1.625rem] sm:text-3xl" /* 24 → 26 → 30px — About stats */,
  display: "text-3xl sm:text-4xl" /* 30→36px — StatsBand, pricing, About years */,
};

/* Theme-aware tones; white comes from a theme-dark surface. */
const tones: Record<TextNumberTone, string> = {
  default: "text-foreground" /* stats on light/dark sections */,
  primary: "text-primary" /* accent numbers — process steps */,
};

export const TextNumber = ({ as: Tag = "span", size = "stat", tone = "default", text }: TextNumberProps) => (
  <Tag className={`font-extrabold ${sizes[size]} ${tones[tone]}`}>{text}</Tag>
);
