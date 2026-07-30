import { AreaCard } from "@/shared-sections/service-areas/components/molecules/AreaCard";
import type { AreaListProps } from "@/shared-sections/service-areas/types";

/* render loop: areas -> AreaCard grid (3 columns at lg) */
export const AreaList = ({ areas }: AreaListProps) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {areas.map(({ key, name, county }) => (
      <AreaCard key={key} name={name} county={county} />
    ))}
  </div>
);
