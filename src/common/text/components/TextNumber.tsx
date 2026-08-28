import type { TextNumberProps, TextNumberSize } from "@/common/text/types";

/* number size per tier */
const sizes: Record<TextNumberSize, string> = {
  base: "text-[clamp(0.95625rem,0.83625rem+0.5333vw,0.98125rem)] leading-relaxed" /* fluid 15.3→15.7px, 360→435vw — inline numbers: testimonials rating */,
  price:
    "text-[clamp(1.125rem,0.4432rem+3.0303vw,1.1875rem)] leading-tight" /* fluid 18→19px, 360→393vw — product card price */,
  stat: "text-xl" /* 20px — pitch stats (all variants) + service-detail process stats */,
  headline: "text-[clamp(1.5rem,6.6667vw,1.625rem)] sm:text-3xl" /* fluid 24→26px, 30px (sm) — About stats */,
  display:
    "text-[clamp(1.75rem,-0.9773rem+12.1212vw,2rem)]" /* fluid 28→32px, 360→393vw — shop price, About years */,
};

export const TextNumber = ({ as: Tag = "span", size = "stat", text }: TextNumberProps) => (
  <Tag className={`font-extrabold ${sizes[size]} text-foreground`}>{text}</Tag>
);
