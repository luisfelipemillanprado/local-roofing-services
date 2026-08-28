import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProjectCardProps } from "@/shared-sections/projects/types";

export const ProjectCard = ({ image, title, description, action }: ProjectCardProps) => (
  <article className="group grid h-full overflow-hidden rounded-2xl border border-line bg-surface-panel shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
    <Media
      src={image}
      alt={title}
      shape="wide"
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 px-5.5 py-4.5">
      <div className="grid min-w-0 gap-2.5">
        <Title as="h3" size="card" weight="bold" truncate text={title} />
        <Text size="body" tone="muted" text={description} />
      </div>
      {action}
    </div>
  </article>
);
