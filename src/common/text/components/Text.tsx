import type { TextProps, TextSize, TextTone, TextWeight } from "@/common/text/types";

/* Body size tiers (arbitrary rem only where Tailwind has no match). */
const sizes: Record<TextSize, string> = {
  lead: "text-base leading-relaxed", // 16px
  body: "text-[0.9375rem] leading-relaxed", // 15px
  caption: "text-sm", // 14px
  note: "text-[0.8125rem]", // 13px
  label: "text-xs", // 12px
};

/* Colors owned here — never inherited. */
const tones: Record<TextTone, string> = {
  default: "text-foreground",
  muted: "text-foreground-muted",
  white: "text-white",
  primary: "text-primary",
};

/* Body weights only (bold display lives in the title component). */
const weights: Record<TextWeight, string> = {
  medium: "font-medium",
  semibold: "font-semibold",
};

export const Text = ({ as: Tag = "p", size = "body", tone = "default", weight, text }: TextProps) => (
  <Tag className={`${sizes[size]} ${tones[tone]}${weight ? ` ${weights[weight]}` : ""}`}>{text}</Tag>
);
