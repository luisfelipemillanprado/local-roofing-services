/* i18n group + data bundle to render */
export type PitchVariant = "why-choose" | "values";

export interface PitchProps {
  variant: PitchVariant;
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
}
