import type { TextNumberProps, TextNumberSize, TextNumberTone } from "@/common/text/types";

/* number size per tier */
const sizes: Record<TextNumberSize, string> = {
  base: "text-sm" /* 14px — inline numbers: testimonials rating, process steps */,
  stat: "text-xl" /* 20px — WhyChoose stats */,
  headline: "text-[clamp(1.5rem,6.6667vw,1.625rem)] sm:text-3xl" /* fluid 24→26px, 30px (sm) — About stats */,
  display: "text-3xl sm:text-4xl" /* 30→36px — StatsBand, pricing, About years */,
};

/* theme-aware tones */
const tones: Record<TextNumberTone, string> = {
  default: "text-foreground" /* stats on light/dark sections */,
  primary: "text-primary" /* accent numbers — process steps */,
};

export const TextNumber = ({ as: Tag = "span", size = "stat", tone = "default", text }: TextNumberProps) => (
  <Tag className={`font-extrabold ${sizes[size]} ${tones[tone]}`}>{text}</Tag>
);
