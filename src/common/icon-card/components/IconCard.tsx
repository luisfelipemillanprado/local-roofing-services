import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import type { IconCardProps } from "@/common/icon-card/types";

export const IconCard = ({ icon, title, description, delay = 0, step }: IconCardProps) => (
  <Reveal delay={delay}>
    {/* same card everywhere: white in light, steel in dark */}
    <article className="grid h-full content-start gap-4.5 rounded-card border border-line bg-surface-panel p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      {step && <TextNumber size="base" tone="primary" text={step} />}
      <IconBadge icon={icon} size="feature" tone="muted" />
      <div className="grid gap-4.5">
        <Title as="h3" size="card" weight="bold" text={title} />
        <Text size="body" tone="muted" text={description} />
      </div>
    </article>
  </Reveal>
);
