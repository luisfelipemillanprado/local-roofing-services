import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { CheckItem } from "@/common/check-item/components/CheckItem";
import { Button } from "@/common/call-to-actions/components/Button";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import type { PricingCardProps } from "@/shared-sections/pricing/types";

export const PricingCard = ({
  icon,
  title,
  description,
  price,
  period,
  features,
  chooseLabel,
  chooseHref,
  popular,
  highlighted = false,
  delay = 0,
}: PricingCardProps) => (
  <Reveal delay={delay}>
    <article
      className={`relative grid h-full grid-rows-[auto_auto_auto_1fr_auto] gap-6 rounded-card border border-line p-7 transition-all duration-300 hover:-translate-y-1.5 ${
        highlighted
          ? "theme-dark bg-highlight text-white shadow-lg"
          : "bg-surface-muted shadow-md hover:shadow-lg"
      }`}
    >
      {highlighted && (
        <span className="absolute top-6 right-6 rounded-full bg-primary px-3 py-1">
          <Text as="span" size="label" tone="white" weight="semibold" tracking="wide" text={popular} />
        </span>
      )}

      <IconBadge icon={icon} size="feature" tone={highlighted ? "solid" : "panel"} />

      <div className="grid gap-2">
        <Title as="h3" size="feature" weight="bold" text={title} />
        <Text size="body" tone="muted" text={description} />
      </div>

      <div className="grid grid-flow-col items-end justify-start gap-2">
        <TextNumber size="display" text={price} />
        <span className="mb-1">
          <Text as="span" size="body" tone="muted" text={period} />
        </span>
      </div>

      <ul className="grid content-start gap-3.5">
        {features.map((feature) => (
          <CheckItem key={feature} tone="muted" text={feature} />
        ))}
      </ul>

      <Button href={chooseHref} variant={highlighted ? "primary" : "secondary"} fullWidth pulse={highlighted}>
        {chooseLabel}
      </Button>
    </article>
  </Reveal>
);
