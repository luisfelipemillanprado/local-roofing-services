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
    | "leftToCenter"; /* body alignment; leftToCenter flips title/desc to left on mobile then centered, eyebrow keeps left mode */
}
