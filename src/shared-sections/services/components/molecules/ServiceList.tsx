import clsx from "clsx";
import { ServiceCard } from "@/shared-sections/services/components/molecules/ServiceCard";
import type { ServiceListProps } from "@/shared-sections/services/types";

/* lg bento slot: two stacked + large right, then large left + two stacked */
const placementByPattern: Record<number, string> = {
  0: "lg:col-start-1",
  1: "lg:col-start-1",
  2: "lg:col-start-2 lg:col-span-2 lg:row-span-2",
  3: "lg:col-start-1 lg:col-span-2 lg:row-span-2",
  4: "lg:col-start-3",
  5: "lg:col-start-3",
};

export const ServiceList = ({ cards, viewDetails }: ServiceListProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-flow-dense lg:auto-rows-[clamp(11rem,20vw,16rem)] lg:grid-cols-3">
    {cards.map((card, index) => {
      const featured = index % 6 === 2 || index % 6 === 3;
      return (
        <div
          key={card.key}
          className={clsx(
            "h-[clamp(17rem,48vw,19rem)] min-h-0 w-full lg:h-full",
            placementByPattern[index % 6],
            /* home summary (6): last card hidden on mobile, shown from md up */
            cards.length === 6 && index === 5 && "hidden md:block",
          )}
        >
          <ServiceCard
            image={card.image}
            title={card.title}
            description={card.description}
            href={card.href}
            viewDetails={viewDetails}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
          />
        </div>
      );
    })}
  </div>
);
