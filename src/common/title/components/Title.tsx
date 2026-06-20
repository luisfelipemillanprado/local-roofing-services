import type { TitleProps, TitleSize, TitleTone, TitleWeight, TitleAccentTone } from "@/common/title/types";

const sizes: Record<TitleSize, string> = {
  display: "text-5xl leading-none sm:text-7xl lg:text-8xl" /* hero h1 */,
  page: "text-4xl leading-none sm:text-5xl lg:text-6xl" /* page header h1 */,
  banner: "text-3xl leading-tight sm:text-4xl lg:text-5xl" /* CTA banner h2 */,
  section: "text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]" /* section h2 */,
  feature: "text-xl" /* services, pricing plan name */,
  card: "text-lg" /* why-choose, projects, team, process steps, values */,
  subtitle: "text-base" /* faq summary */,
  micro: "text-sm" /* footer columns, person names */,
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

const tracked = "tracking-[0.126rem]"; /* Opt-in letter-spacing micro titles */

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
  <Tag className={`${sizes[size]} ${tones[tone]} ${weights[weight]}${tracking ? ` ${tracked}` : ""}`}>
    {text}
    {accent && <span className={`block ${accentTones[accentTone]}`}>{accent}</span>}
  </Tag>
);
