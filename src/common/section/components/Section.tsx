import type { SectionProps, SectionTone } from "@/common/section/types";

/* Uniform section shell: padding is fixed, only the surface tone varies */
const tones: Record<SectionTone, string> = {
  base: "bg-surface-base" /* white in light, night in dark */,
  muted: "bg-surface-muted" /* cream in light, charcoal in dark */,
  dark: "theme-dark bg-contrast" /* graphite in both themes, white text */,
};

export const Section = ({ children, tone = "base", id }: SectionProps) => (
  <section id={id} className={`${tones[tone]} py-20 lg:py-28`}>
    {children}
  </section>
);
