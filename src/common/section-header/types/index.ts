import type { TitleSize } from "@/common/title/types";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  size?: TitleSize; /* forwarded to Title */
  align?:
    | "left"
    | "center"
    | "leftFromMobile"; /* lg alignment; leftFromMobile also lefts the body on mobile, eyebrow stays centered there */
}
