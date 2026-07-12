import type { TitleProps, TitleSize, TitleTone, TitleWeight, TitleAccentTone } from "@/common/title/types";

const sizes: Record<TitleSize, string> = {
  display: "text-[3.375rem] leading-none sm:text-7xl lg:text-8xl" /* 54 → 72 → 96px — hero h1 */,
  page: "text-4xl leading-none sm:text-5xl lg:text-6xl" /* 36 → 48 → 60px — page header h1 */,
  banner:
    "text-[clamp(1.875rem,0.375rem+6.6667vw,2.25rem)] leading-tight lg:text-5xl" /* fluid 30→36px (like section), 48px (lg) — CTA banner h2 */,
  section:
    "text-[clamp(1.875rem,0.375rem+6.6667vw,2.25rem)] leading-tight lg:text-[2.75rem]" /* fluid 30→36px, 44px (lg) — section h2 */,
  feature:
    "text-[clamp(1.1875rem,0.5057rem+3.0303vw,1.25rem)] leading-tight" /* 19→20px, 360→393vw — pricing plan name */,
  card: "text-[clamp(1.125rem,0.4432rem+3.0303vw,1.1875rem)] leading-tight" /* 18→19px, 360→393vw — services, why-choose, projects, team, process steps, values */,
  micro: "text-sm" /* 14px — footer columns */,
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
}: TitleProps) => (
  <Tag
    className={`${sizes[size]} ${tones[tone]} ${weights[weight]} ${tracking ? "tracking-[0.126rem]" : ""} ${truncate ? "truncate" : ""}`}
  >
    <span>{text}</span>
    {accent && <span className={`block ${accentTones[accentTone]}`}>{accent}</span>}
  </Tag>
);
