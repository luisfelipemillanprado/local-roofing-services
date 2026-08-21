import { ProjectCard } from "@/shared-sections/projects/components/molecules/ProjectCard";
import type { ProjectGridProps } from "@/shared-sections/projects/types";

/* shared render loop: cards → ProjectCard grid; the trailing control comes from renderAction */
export const ProjectGrid = ({ cards, renderAction }: ProjectGridProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((card, index) => (
      <ProjectCard
        key={card.key}
        image={card.image}
        title={card.title}
        description={card.description}
        action={renderAction(card, index)}
      />
    ))}
  </div>
);
