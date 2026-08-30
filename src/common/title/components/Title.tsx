import type { TitleProps, TitleSize, TitleTone, TitleWeight, TitleAccentTone } from "@/common/title/types";

const sizes: Record<TitleSize, string> = {
  display: "text-[3.375rem] leading-none sm:text-7xl lg:text-8xl" /* 54px, 72px (sm), 96px (lg) — hero h1 */,
  page: "text-4xl leading-none sm:text-5xl lg:text-6xl" /* 36px, 48px (sm), 60px (lg) — product detail h1 */,
  banner:
    "text-[clamp(1.875rem,0.375rem+6.6667vw,2.25rem)] leading-tight lg:text-5xl" /* fluid 30→36px, 360→450vw, 48px (lg) — CTA banner h2 */,
  section:
    "text-[clamp(1.875rem,0.675rem+5.3333vw,2.125rem)] leading-tight sm:text-[clamp(2.1875rem,1.1208rem+2.6667vw,2.3125rem)] lg:text-[2.75rem]" /* fluid 30→34px (360→435vw), 35→37px from sm (640→715vw), 44px (lg) */,
  feature:
    "text-[clamp(1.1875rem,0.5057rem+3.0303vw,1.25rem)] leading-tight" /* fluid 19→20px, 360→393vw — service detail included panel */,
  card: "text-[clamp(1.15rem,0.91rem+1.0667vw,1.2rem)] leading-tight" /* fluid 18.4→19.2px, 360→435vw — service, product, project and icon card titles */,
  micro:
    "text-[clamp(0.95625rem,0.83625rem+0.5333vw,0.98125rem)] leading-relaxed" /* fluid 15.3→15.7px, 360→435vw — footer columns */,
};

const tones: Record<TitleTone, string> = {
  default: "text-foreground" /* theme-aware navy/white */,
  white: "text-white" /* forced white off theme-dark — titles over images */,
};

const weights: Record<TitleWeight, string> = {
  bold: "font-bold" /* cards, micro titles */,
  extrabold: "font-extrabold" /* hero, page, section headings */,
};

const accentTones: Record<TitleAccentTone, string> = {
  primary: "text-primary" /* the common case */,
  faint: "text-white/35" /* hero accent */,
};

export const Title = ({
  as: Tag = "h2",
  size = "section",
  tone = "default",
  weight = "extrabold",
  tracking = false,
  truncate = false,
  text,
  accent,
  accentTone = "primary",
  accentInline = false,
}: TitleProps) => (
  <Tag
    className={`${sizes[size]} ${tones[tone]} ${weights[weight]} ${tracking ? "tracking-[0.126rem]" : ""} ${truncate ? "truncate" : ""}`}
  >
    <span>{text}</span>
    {/* space between lead and accent when they share a line */}
    {accent && " "}
    {accent && (
      <span
        className={`block ${accentInline === "until-lg" ? "sm:inline lg:block" : accentInline ? "sm:inline" : ""} ${accentTones[accentTone]}`}
      >
        {accent}
      </span>
    )}
  </Tag>
);
