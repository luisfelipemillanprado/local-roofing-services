import type { IconBadgeKey } from "@/common/icon-badge/types";

/* resolved before/after image: src from data, label + alt from i18n */
export interface CaseStudyImage {
  src: string;
  label: string;
  alt: string;
}

export interface BeforeAfterSliderProps {
  before: CaseStudyImage;
  after: CaseStudyImage;
  compareLabel: string;
}

export interface CaseStudyCardProps {
  icon: IconBadgeKey;
  title: string;
  description: string;
}

/* resolved per-card item for the list */
interface CaseStudyCardItem extends CaseStudyCardProps {
  key: string;
}

export interface CaseStudyListProps {
  cards: CaseStudyCardItem[];
}
