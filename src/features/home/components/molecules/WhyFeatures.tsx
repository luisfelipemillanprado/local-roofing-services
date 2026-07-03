import { IconCard } from "@/common/icon-card/components/IconCard";
import type { WhyFeaturesProps } from "@/features/home/types";

/* Why-choose feature cards grid */
export const WhyFeatures = ({ features }: WhyFeaturesProps) => (
  <div className="grid gap-5 sm:grid-cols-2">
    {features.map(({ key, icon, title, description, delay }) => (
      <IconCard key={key} icon={icon} title={title} description={description} delay={delay} />
    ))}
  </div>
);
