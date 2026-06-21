import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import type { IconCardProps } from "@/common/icon-card/types";

const base =
  "rounded-card border border-line bg-surface-panel p-7"; /* same card everywhere: white in light, steel in dark */
const hoverLift =
  "group shadow-shade/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"; /* opt-in lift */

export const IconCard = ({ icon, title, description, delay = 0, lift = true, step }: IconCardProps) => (
  <Reveal as="article" delay={delay} className={`${base}${lift ? ` ${hoverLift}` : ""}`}>
    {step && (
      <div className="mb-4">
        <TextNumber size="base" tone="primary" text={step} />
      </div>
    )}
    <IconBadge icon={icon} size="feature" tone="muted" hover={lift} />
    <div className="mt-5">
      <Title as="h3" size="card" weight="bold" text={title} />
    </div>
    <div className="mt-2">
      <Text size="body" tone="muted" text={description} />
    </div>
  </Reveal>
);
