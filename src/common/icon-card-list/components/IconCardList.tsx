import { IconCard } from "@/common/icon-card/components/IconCard";
import type { IconCardListProps } from "@/common/icon-card-list/types";

/* icon card grid, two columns from sm */
export const IconCardList = ({ cards }: IconCardListProps) => (
  <div className="grid gap-5 sm:grid-cols-2">
    {cards.map(({ key, icon, title, description, delay }) => (
      <IconCard key={key} icon={icon} title={title} description={description} delay={delay} />
    ))}
  </div>
);
