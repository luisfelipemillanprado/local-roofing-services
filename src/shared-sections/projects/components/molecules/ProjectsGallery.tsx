import { ProjectCard } from "@/shared-sections/projects/components/molecules/ProjectCard";
import type { ProjectsGalleryProps } from "@/shared-sections/projects/types";

/* Projects gallery grid; home collapses to 4 below lg */
export const ProjectsGallery = ({ items, learnMore, collapseBelowLg = false }: ProjectsGalleryProps) => (
  <div
    className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
      collapseBelowLg ? "[&>*:nth-child(n+5)]:hidden lg:[&>*:nth-child(n+5)]:grid" : ""
    }`}
  >
    {items.map(({ key, ...card }) => (
      <ProjectCard key={key} {...card} learnMore={learnMore} />
    ))}
  </div>
);
