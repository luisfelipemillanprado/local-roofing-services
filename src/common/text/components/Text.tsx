import type { TextProps, TextSize, TextTone, TextTracking, TextWeight } from "@/common/text/types";

const sizes: Record<TextSize, string> = {
  lead: "text-[clamp(0.95625rem,0.74625rem+0.9333vw,1rem)] leading-relaxed" /* fluid 15.3→16px, 360→435vw — section/page descriptions, footer tagline, shop tabs & empty state */,
  body: "text-[clamp(0.95625rem,0.83625rem+0.5333vw,0.98125rem)] leading-relaxed" /* fluid 15.3→15.7px, 360→435vw — card body, buttons, navbar, footer, hero rating, contact phone */,
  caption:
    "text-[clamp(0.8375rem,0.6575rem+0.8vw,0.875rem)] leading-relaxed" /* fluid 13.4→14px, 360→435vw — marquee, stat captions, contact/years labels, product meta, filter counts, review count, icon highlights */,
  note: "text-[clamp(0.825rem,0.675rem+0.6667vw,0.85625rem)] leading-relaxed" /* fluid 13.2→13.7px, 360→435vw — hero availability badge, shop product meta, filter titles, area counties */,
  label:
    "text-[clamp(0.7625rem,0.6125rem+0.6667vw,0.79375rem)] leading-relaxed" /* fluid 12.2→12.7px, 360→435vw — eyebrows, navbar locale code */,
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
  wide: "tracking-[0.126rem]" /* 2px — eyebrows and badges */,
  subtle:
    "tracking-[0.0625rem]" /* 1px — short labels, e.g. the locale code, availability badge, contact card, years badge */,
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
