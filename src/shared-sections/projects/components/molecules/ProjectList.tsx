import { ProjectCard } from "@/shared-sections/projects/components/molecules/ProjectCard";
import type { ProjectListProps } from "@/shared-sections/projects/types";

/* render loop: cards → ProjectCard grid */
export const ProjectList = ({ cards, learnMore, collapseBelowLg = false }: ProjectListProps) => (
  <div
    className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
      collapseBelowLg ? "[&>*:nth-child(n+5)]:hidden lg:[&>*:nth-child(n+5)]:grid" : ""
    }`}
  >
    {cards.map(({ key, ...card }) => (
      <ProjectCard key={key} {...card} learnMore={learnMore} />
    ))}
  </div>
);
