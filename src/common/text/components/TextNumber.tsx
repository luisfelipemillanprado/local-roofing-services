import type { TextNumberProps, TextNumberSize, TextNumberTone } from "@/common/text/types";

/* Display scale for metrics (smallest tier shares Text's 14px). */
const sizes: Record<TextNumberSize, string> = {
  base: "text-sm", // 14px
  stat: "text-xl", // 20px
  headline: "text-2xl sm:text-3xl", // 24→30px
  display: "text-3xl sm:text-4xl", // 30→36px
};

/* Theme-aware tones; white comes from a theme-dark surface. */
const tones: Record<TextNumberTone, string> = {
  default: "text-foreground",
  primary: "text-primary",
};

export const TextNumber = ({ as: Tag = "span", size = "stat", tone = "default", text }: TextNumberProps) => (
  <Tag className={`font-extrabold ${sizes[size]} ${tones[tone]}`}>{text}</Tag>
);
