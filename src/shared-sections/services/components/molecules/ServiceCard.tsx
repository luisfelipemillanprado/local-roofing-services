import { Link } from "@/i18n/navigation";
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
    className="group grid overflow-hidden rounded-card border border-line bg-surface-panel shadow-md shadow-shade/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
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
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 px-5.5 py-4">
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
  </Reveal>
);
