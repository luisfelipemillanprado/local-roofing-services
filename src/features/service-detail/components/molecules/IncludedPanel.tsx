import { CheckItem } from "@/common/check-item/components/CheckItem";
import { Title } from "@/common/title/components/Title";
import type { IncludedPanelProps } from "@/features/service-detail/types";

/* checklist panel: title over a checked list */
export const IncludedPanel = ({ title, items }: IncludedPanelProps) => (
  <div className="grid content-start gap-6 rounded-card border border-line bg-surface-panel p-8 shadow-md">
    <Title as="h3" size="feature" weight="bold" text={title} />
    <ul className="grid gap-4">
      {items.map((text) => (
        <CheckItem key={text} tone="muted" text={text} />
      ))}
    </ul>
  </div>
);
