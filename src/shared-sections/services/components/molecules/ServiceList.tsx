import { ServiceCard } from "@/shared-sections/services/components/molecules/ServiceCard";
import type { ServiceListProps } from "@/shared-sections/services/types";

/* render loop: resolved cards → grid of ServiceCard */
export const ServiceList = ({ cards, learnMore }: ServiceListProps) => (
  <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {cards.map(({ key, ...card }) => (
      <ServiceCard key={key} {...card} learnMore={learnMore} href="#contact" />
    ))}
  </div>
);
