import { ProjectCard } from "@/shared-sections/projects/components/molecules/ProjectCard";
import type { ProjectsGalleryProps } from "@/shared-sections/projects/types";

/* Projects gallery grid: highlighted card spans two columns */
export const ProjectsGallery = ({ items }: ProjectsGalleryProps) => (
  <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {items.map(({ key, image, title, category, highlighted, delay }) => (
      <ProjectCard
        key={key}
        image={image}
        title={title}
        category={category}
        highlighted={highlighted}
        delay={delay}
      />
    ))}
  </div>
);
