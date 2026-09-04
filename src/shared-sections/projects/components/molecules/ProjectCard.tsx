import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProjectCardProps } from "@/shared-sections/projects/types";

/* full-bleed tile: image fills the cell, caption sits on the bottom scrim */
export const ProjectCard = ({ image, title, description, action, sizes }: ProjectCardProps) => (
  <article className="group relative h-full overflow-hidden rounded-card border border-line shadow-md">
    <Media src={image} alt={title} shape="fill" sizes={sizes} />
    <div className="pointer-events-none absolute inset-0 overlay-card-bottom" />
    <div className="absolute inset-x-0 bottom-0 grid grid-cols-[1fr_auto] items-center gap-4 px-5.5 py-4.5">
      <div className="grid min-w-0 gap-2.5">
        <Title as="h3" size="card" tone="white" weight="bold" truncate text={title} />
        <Text size="body" tone="white" truncate text={description} />
      </div>
      {action}
    </div>
  </article>
);
