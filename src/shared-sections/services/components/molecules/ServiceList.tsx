import { ServiceCard } from "@/shared-sections/services/components/molecules/ServiceCard";
import type { ServiceListProps } from "@/shared-sections/services/types";

/* render loop: cards → ServiceCard grid */
export const ServiceList = ({ cards, viewDetails }: ServiceListProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {cards.map(({ key, ...card }) => (
      <ServiceCard key={key} {...card} viewDetails={viewDetails} />
    ))}
  </div>
);
