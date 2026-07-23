import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Title } from "@/common/title/components/Title";
import { Text } from "@/common/text/components/Text";
import type { CaseStudyCardProps } from "@/features/projects/types";

/* horizontal narrative card: icon left, heading + copy right */
export const CaseStudyCard = ({ icon, title, description }: CaseStudyCardProps) => (
  <article className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-card border border-line bg-surface-panel p-6 shadow-md">
    <IconBadge icon={icon} size="feature" tone="muted" />
    <div className="grid gap-2">
      <Title as="h3" size="card" weight="bold" text={title} />
      <Text size="body" tone="muted" text={description} />
    </div>
  </article>
);
