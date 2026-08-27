import clsx from "clsx";
import { ServiceCard } from "@/shared-sections/services/components/molecules/ServiceCard";
import type { ServiceListProps } from "@/shared-sections/services/types";

/* render loop: cards → ServiceCard grid */
export const ServiceList = ({ cards, viewDetails }: ServiceListProps) => (
  <div
    className={clsx(
      "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
      /* home summary (6): last card hidden on mobile, shown from md up */
      cards.length === 6 && "[&>*:last-child]:hidden md:[&>*:last-child]:grid",
    )}
  >
    {cards.map(({ key, ...card }) => (
      <ServiceCard key={key} {...card} viewDetails={viewDetails} />
    ))}
  </div>
);
