import { CaseStudyCard } from "@/features/projects/components/CaseStudyCard";
import type { CaseStudyListProps } from "@/features/projects/types";

/* stacked case-study narrative cards */
export const CaseStudyList = ({ cards }: CaseStudyListProps) => (
  <div className="grid gap-5">
    {cards.map(({ key, icon, title, description }) => (
      <CaseStudyCard key={key} icon={icon} title={title} description={description} />
    ))}
  </div>
);
