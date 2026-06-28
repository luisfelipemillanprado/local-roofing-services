import type { TitleProps, TitleSize, TitleTone, TitleWeight, TitleAccentTone } from "@/common/title/types";

const sizes: Record<TitleSize, string> = {
  display: "text-[3.375rem] leading-none sm:text-7xl lg:text-8xl" /* hero h1 — 54 → 72 → 96px */,
  page: "text-4xl leading-none sm:text-5xl lg:text-6xl" /* page header h1 — 36 → 48 → 60px */,
  banner: "text-3xl leading-tight sm:text-4xl lg:text-5xl" /* CTA banner h2 — 30 → 36 → 48px */,
  section: "text-[2rem] leading-tight sm:text-4xl lg:text-[2.75rem]" /* section h2 — 32 → 36 → 44px */,
  feature: "text-xl" /* services, pricing plan name — 20px */,
  card: "text-lg" /* why-choose, projects, team, process steps, values — 18px */,
  micro: "text-sm" /* footer columns, person names — 14px */,
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
  text,
  accent,
  accentTone = "primary",
}: TitleProps) => (
  <Tag
    className={`${sizes[size]} ${tones[tone]} ${weights[weight]} ${tracking ? "tracking-[0.126rem]" : ""}`}
  >
    {text}
    {accent && <span className={`block ${accentTones[accentTone]}`}>{accent}</span>}
  </Tag>
);
