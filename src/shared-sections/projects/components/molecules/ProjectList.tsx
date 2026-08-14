import { ProjectCard } from "@/shared-sections/projects/components/molecules/ProjectCard";
import type { ProjectListProps } from "@/shared-sections/projects/types";

/* render loop: cards → ProjectCard grid */
export const ProjectList = ({ cards, href, actionLabel }: ProjectListProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {cards.map(({ key, ...card }) => (
      <ProjectCard key={key} {...card} href={href} actionLabel={actionLabel} />
    ))}
  </div>
);
