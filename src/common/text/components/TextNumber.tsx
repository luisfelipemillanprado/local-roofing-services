import type { TextNumberProps, TextNumberSize, TextNumberTone } from "@/common/text/types";

/* number size per tier */
const sizes: Record<TextNumberSize, string> = {
  base: "text-[0.9375rem]" /* 15px — inline numbers: testimonials rating, process steps */,
  price:
    "text-[clamp(1.125rem,0.4432rem+3.0303vw,1.1875rem)] leading-tight" /* 18→19px, mirrors the card title — product card price */,
  stat: "text-xl" /* 20px — WhyChoose stats */,
  headline: "text-[clamp(1.5rem,6.6667vw,1.625rem)] sm:text-3xl" /* fluid 24→26px, 30px (sm) — About stats */,
  display: "text-3xl sm:text-4xl" /* 30→36px — hero, page header, pricing, About years */,
};

/* theme-aware tones */
const tones: Record<TextNumberTone, string> = {
  default: "text-foreground" /* stats on light/dark sections */,
  primary: "text-primary" /* accent numbers — process steps */,
};

export const TextNumber = ({ as: Tag = "span", size = "stat", tone = "default", text }: TextNumberProps) => (
  <Tag className={`font-extrabold ${sizes[size]} ${tones[tone]}`}>{text}</Tag>
);
