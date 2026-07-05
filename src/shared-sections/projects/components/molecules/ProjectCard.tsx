import { Media } from "@/common/media/components/Media";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProjectCardProps } from "@/shared-sections/projects/types";

/* Gallery card: image + category/title, Services-style panel */
export const ProjectCard = ({ image, title, category, delay = 0 }: ProjectCardProps) => (
  <Reveal delay={delay}>
    <article className="group grid h-full overflow-hidden rounded-card border border-line bg-surface-panel shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      <Media
        src={image}
        alt={title}
        shape="wide"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="grid gap-2.5 px-5.5 py-4.5">
        <Text size="label" tone="primary" weight="semibold" tracking="wide" text={category} />
        <Title as="h3" size="card" weight="bold" truncate text={title} />
      </div>
    </article>
  </Reveal>
);
