import { IconCard } from "@/common/icon-card/components/IconCard";
import type { ProcessListProps } from "@/features/service-detail/types";

/* process steps: single row of four from lg, numbered */
export const ProcessList = ({ steps }: ProcessListProps) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {steps.map(({ key, icon, step, title, description, delay }) => (
      <IconCard key={key} icon={icon} step={step} title={title} description={description} delay={delay} />
    ))}
  </div>
);
