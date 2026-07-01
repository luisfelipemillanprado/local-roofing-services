import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Media } from "@/common/media/components/Media";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { ServiceCardProps } from "@/shared-sections/services/types";

export const ServiceCard = ({
  icon,
  image,
  title,
  description,
  learnMore,
  href,
  delay = 0,
}: ServiceCardProps) => (
  <Reveal
    as="article"
    delay={delay}
    className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface-panel shadow-md shadow-shade/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
  >
    <div className="relative">
      <Media
        src={image}
        alt={title}
        shape="wide"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <span className="absolute top-4 left-4">
        <IconBadge icon={icon} size="card" tone="solid" shadow />
      </span>
    </div>
    <div className="flex items-center justify-between gap-4 p-6">
      <div className="min-w-0">
        <Title as="h3" size="feature" weight="bold" truncate text={title} />
        <div className="mt-3">
          <Text size="body" tone="muted" truncate text={description} />
        </div>
      </div>
      <Link
        href={href}
        aria-label={learnMore}
        className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-1"
      >
        <ArrowRight className="size-5" />
      </Link>
    </div>
  </Reveal>
);
