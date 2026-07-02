import { ServiceCard } from "@/shared-sections/services/components/molecules/ServiceCard";
import type { ServiceListProps } from "@/shared-sections/services/types";

/* render loop: cards → ServiceCard grid */
export const ServiceList = ({ cards, learnMore, collapseBelowLg = false }: ServiceListProps) => (
  <div
    className={`mt-13 grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
      collapseBelowLg ? "[&>*:nth-child(n+5)]:hidden lg:[&>*:nth-child(n+5)]:grid" : ""
    }`}
  >
    {cards.map(({ key, ...card }) => (
      <ServiceCard key={key} {...card} learnMore={learnMore} />
    ))}
  </div>
);
