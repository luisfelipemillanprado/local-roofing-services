export interface CaseStudyProps {
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
}

/* resolved before/after image: src + label + alt */
interface CaseStudyImage {
  src: string;
  label: string;
  alt: string;
}

export interface BeforeAfterSliderProps {
  before: CaseStudyImage;
  after: CaseStudyImage;
  compareLabel: string;
}
