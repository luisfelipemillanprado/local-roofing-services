import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProjectCardProps } from "@/shared-sections/projects/types";

export const ProjectCard = ({ image, title, description, learnMore, href, delay = 0 }: ProjectCardProps) => (
  <Reveal delay={delay}>
    <article className="group grid h-full overflow-hidden rounded-card border border-line bg-surface-panel shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      <Media
        src={image}
        alt={title}
        shape="wide"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="grid grid-cols-[1fr_auto] items-center gap-4 px-5.5 py-4.5">
        <div className="grid min-w-0 gap-2.5">
          <Title as="h3" size="card" weight="bold" truncate text={title} />
          <Text size="body" tone="muted" truncate text={description} />
        </div>
        <Link
          href={href}
          aria-label={learnMore}
          className="grid size-10 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-1"
        >
          <ArrowRight className="size-5 -rotate-45" />
        </Link>
      </div>
    </article>
  </Reveal>
);
