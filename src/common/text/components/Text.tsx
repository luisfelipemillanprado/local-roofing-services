import type { TextProps, TextSize, TextTone, TextTracking, TextWeight } from "@/common/text/types";

const sizes: Record<TextSize, string> = {
  lead: "text-[clamp(0.95625rem,0.74625rem+0.9333vw,1rem)] leading-relaxed" /* fluid 15.3→16px, 360→435vw — section/page descriptions, footer tagline, shop tabs & empty state */,
  body: "text-[clamp(0.95rem,0.83rem+0.5333vw,0.975rem)] leading-relaxed" /* fluid 15.2→15.6px, 360→435vw — card body, buttons, navbar, footer, hero rating, contact phone */,
  caption:
    "text-[clamp(0.84375rem,0.69375rem+0.6667vw,0.875rem)] leading-relaxed" /* fluid 13.5→14px, 360→435vw — marquee, stat captions, contact/years labels, product meta, filter counts, icon highlights */,
  note: "text-[clamp(0.825rem,0.705rem+0.5333vw,0.85rem)] leading-relaxed" /* fluid 13.2→13.6px, 360→435vw — hero availability badge, shop product meta, filter titles, review count, area counties */,
  label:
    "text-[clamp(0.7625rem,0.6425rem+0.5333vw,0.7875rem)] leading-relaxed" /* fluid 12.2→12.6px, 360→435vw — eyebrows, navbar locale code */,
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
