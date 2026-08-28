import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { IconCardProps } from "@/common/icon-card/types";

/* same card everywhere: white in light, steel in dark */
export const IconCard = ({ icon, title, description, highlights }: IconCardProps) => (
  <article className="grid h-full grid-rows-[auto_1fr_auto] gap-4.75 rounded-2xl border border-line bg-surface-panel p-6 shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
    <IconBadge icon={icon} size="feature" tone="muted" />
    <div className="grid gap-4.5">
      <Title as="h3" size="card" weight="bold" text={title} />
      <Text size="body" tone="muted" text={description} />
    </div>
    {highlights && (
      <div className="grid grid-flow-col items-center justify-start gap-2 border-t border-line pt-4.75">
        <Text
          as="span"
          size="caption"
          tone="default"
          weight="bold"
          tracking="subtle"
          text={highlights.label}
        />
        <Text as="span" size="caption" tone="muted" text="•" />
        <Text as="span" size="caption" tone="primary" tracking="subtle" text={highlights.accent} />
      </div>
    )}
  </article>
);
