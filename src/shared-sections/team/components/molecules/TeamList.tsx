import { TeamCard } from "@/shared-sections/team/components/molecules/TeamCard";
import type { TeamListProps } from "@/shared-sections/team/types";

/* render loop: cards → TeamCard grid */
export const TeamList = ({ cards, viewDetails, collapseBelowLg = false }: TeamListProps) => (
  <div
    className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
      collapseBelowLg ? "[&>*:nth-child(n+5)]:hidden lg:[&>*:nth-child(n+5)]:grid" : ""
    }`}
  >
    {cards.map(({ key, ...card }) => (
      <TeamCard key={key} {...card} viewDetails={viewDetails} />
    ))}
  </div>
);
