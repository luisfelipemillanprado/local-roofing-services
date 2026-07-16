import { IconCard } from "@/common/icon-card/components/IconCard";
import type { ValuesListProps } from "@/features/about/types";

/* value cards grid */
export const ValuesList = ({ values }: ValuesListProps) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {values.map(({ key, icon, title, description, delay }) => (
      <IconCard key={key} icon={icon} title={title} description={description} delay={delay} />
    ))}
  </div>
);
