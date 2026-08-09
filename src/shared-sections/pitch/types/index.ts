/* i18n group + data bundle to render */
type PitchVariant = "why-choose" | "process" | "values";

export interface PitchProps {
  variant: PitchVariant;
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
}
