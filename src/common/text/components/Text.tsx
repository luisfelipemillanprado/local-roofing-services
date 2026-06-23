import type { TextProps, TextSize, TextTone, TextTracking, TextWeight } from "@/common/text/types";

const sizes: Record<TextSize, string> = {
  lead: "text-base leading-relaxed" /* 16px — section/page descriptions, footer tagline */,
  body: "text-[0.9375rem] leading-relaxed" /* 15px — card body, buttons, navbar, footer, hero rating */,
  caption: "text-sm leading-tight" /* 14px — marquee, stat captions */,
  note: "text-[0.8125rem] leading-tight" /* 13px — reserved tier, no usage yet */,
  label: "text-xs leading-tight" /* 12px — eyebrows and badges */,
};

const tones: Record<TextTone, string> = {
  default: "text-foreground" /* navy/white per theme — phone, mobile menu */,
  muted: "text-foreground-muted" /* slate/stone — descriptions (most common) */,
  white: "text-white" /* badges over dark imagery (hero, marquee) */,
  primary: "text-primary" /* accent labels — categories, eyebrows */,
};

const weights: Record<TextWeight, string> = {
  medium: "font-medium" /* navbar links */,
  semibold: "font-semibold" /* buttons, badges, emphasized copy */,
  bold: "font-bold" /* marquee strip labels */,
};

const trackings: Record<TextTracking, string> = {
  wide: "tracking-[0.126rem]" /* eyebrows and badges */,
  subtle: "tracking-wider" /* short labels, e.g. the locale code */,
};

export const Text = ({
  as: Tag = "p",
  size = "body",
  tone = "default",
  weight,
  tracking,
  truncate = false,
  text,
}: TextProps) => (
  <Tag
    className={`${sizes[size]} ${tones[tone]}${weight ? ` ${weights[weight]}` : ""}${tracking ? ` ${trackings[tracking]}` : ""} ${truncate ? "truncate" : ""}`}
  >
    {text}
  </Tag>
);
