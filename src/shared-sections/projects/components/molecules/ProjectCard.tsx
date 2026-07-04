import { ArrowUpRight } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ProjectCardProps } from "@/shared-sections/projects/types";

/* Gallery card: photo + hover-revealed category/title overlay; highlighted spans wide */
export const ProjectCard = ({ image, title, category, highlighted, delay = 0 }: ProjectCardProps) => (
  <Reveal
    as="article"
    delay={delay}
    className={`group relative overflow-hidden rounded-card ${highlighted ? "sm:col-span-2" : ""}`}
  >
    <Media
      src={image}
      alt={title}
      shape="gallery"
      overlay="strong"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />

    <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-5 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <div>
        <Text as="p" size="label" tone="primary" weight="semibold" tracking="wide" text={category} />
        <div className="mt-1">
          <Title as="h3" size="card" weight="bold" tone="white" text={title} />
        </div>
      </div>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight className="size-5" />
      </span>
    </div>
  </Reveal>
);
