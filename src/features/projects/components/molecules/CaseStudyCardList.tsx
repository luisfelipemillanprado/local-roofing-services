import { IconCard } from "@/common/icon-card/components/IconCard";
import type { IconCardListProps } from "@/common/icon-card-list/types";

/* case study cards: single row of four from lg */
export const CaseStudyCardList = ({ cards }: IconCardListProps) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {cards.map(({ key, icon, title, description }) => (
      <IconCard key={key} icon={icon} title={title} description={description} />
    ))}
  </div>
);
