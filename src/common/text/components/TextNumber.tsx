import type { TextNumberProps, TextNumberSize } from "@/common/text/types";

/* number size per tier */
const sizes: Record<TextNumberSize, string> = {
  base: "text-[0.9375rem]" /* 15px — inline numbers: testimonials rating */,
  price:
    "text-[clamp(1.125rem,0.4432rem+3.0303vw,1.1875rem)] leading-tight" /* fluid 18→19px, 360→393vw, mirrors the card title — product card price */,
  stat: "text-xl" /* 20px — why-choose + service stats */,
  headline: "text-[clamp(1.5rem,6.6667vw,1.625rem)] sm:text-3xl" /* fluid 24→26px, 30px (sm) — About stats */,
  display:
    "text-[clamp(1.75rem,-0.9773rem+12.1212vw,2rem)]" /* fluid 28→32px, 360→393vw — shop price, About years */,
};

export const TextNumber = ({ as: Tag = "span", size = "stat", text }: TextNumberProps) => (
  <Tag className={`font-extrabold ${sizes[size]} text-foreground`}>{text}</Tag>
);
