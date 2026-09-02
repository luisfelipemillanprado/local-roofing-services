import type { TitleSize } from "@/common/title/types";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  size?: TitleSize; /* forwarded to Title */
  align?: "left" | "center"; /* center: left on tablet; left: cluster from sm; omit: About */
  flushFrom?: "md" | "lg"; /* stays centered while stacked, goes left-flush once the CTA sits beside it */
}
