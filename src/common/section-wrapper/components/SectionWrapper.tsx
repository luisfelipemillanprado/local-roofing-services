import type { SectionWrapperProps, SectionWrapperTone } from "@/common/section-wrapper/types";

/* section wrapper — only the surface tone varies */
const tones: Record<SectionWrapperTone, string> = {
  base: "bg-surface-base" /* white in light, night in dark */,
  muted: "bg-surface-muted" /* cream in light, charcoal in dark */,
};

export const SectionWrapper = ({ children, tone = "base", id }: SectionWrapperProps) => (
  <section id={id} className={`${tones[tone]} py-18 lg:py-28`}>
    {children}
  </section>
);
