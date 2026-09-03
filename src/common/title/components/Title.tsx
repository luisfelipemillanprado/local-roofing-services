import clsx from "clsx";
import type { TitleProps, TitleSize, TitleTone, TitleWeight, TitleAccentTone } from "@/common/title/types";

const sizes: Record<TitleSize, string> = {
  display:
    "text-[3.375rem] sm:text-[clamp(4.5rem,3.25rem+3.125vw,6rem)] leading-none" /* 54px, then fluid 72px (sm) → 84px (lg) → 96px (2xl) — hero h1 */,
  page: "text-4xl sm:text-5xl lg:text-6xl leading-none" /* 36px, 48px (sm), 60px (lg) — product detail h1 */,
  banner:
    "text-[clamp(1.875rem,0.375rem+6.6667vw,2.25rem)] lg:text-5xl leading-[1.3]" /* fluid 30→36px, 360→450vw, 48px (lg) — CTA banner h2 */,
  section:
    "text-[clamp(1.875rem,0.675rem+5.3333vw,2.125rem)] sm:text-[clamp(2.2rem,1.86875rem+0.828125vw,2.625rem)] leading-[1.3]" /* fluid 30→34px (360→435vw), 35.2→40.5px from sm (640→1280vw), 42px cap by 2xl */,
  feature:
    "text-[clamp(1.1875rem,0.5057rem+3.0303vw,1.25rem)] leading-[1.3]" /* fluid 19→20px, 360→393vw — service detail included panel */,
  card: "text-[clamp(1.15rem,0.91rem+1.0667vw,1.2rem)] leading-[1.3]" /* fluid 18.4→19.2px, 360→435vw — service, product, project and icon card titles */,
  micro:
    "text-[clamp(0.95625rem,0.83625rem+0.5333vw,0.98125rem)] leading-[1.3]" /* fluid 15.3→15.7px, 360→435vw — footer columns */,
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
    className={clsx(
      sizes[size],
      tones[tone],
      weights[weight],
      tracking && "tracking-[0.126rem]",
      truncate && "truncate",
    )}
  >
    <span>{text}</span>
    {accent && (
      <>
        {/* space between lead and accent when they share a line */}{" "}
        <span
          className={clsx(
            "block",
            accentInline && "sm:inline",
            accentInline === "until-lg" && "md:block lg:inline",
            accentTones[accentTone],
          )}
        >
          {accent}
        </span>
      </>
    )}
  </Tag>
);
