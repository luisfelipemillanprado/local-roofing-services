import clsx from "clsx";
import { OfficeCard } from "@/shared-sections/service-areas/components/molecules/OfficeCard";
import type { OfficeListProps } from "@/shared-sections/service-areas/types";

/* lg bento: two rows, each a large tile (2 cols) beside a small one, mirrored */
const placementByIndex: Record<number, string> = {
  0: "lg:col-start-1 lg:col-span-2",
  1: "lg:col-start-3",
  2: "lg:col-start-1",
  3: "lg:col-start-2 lg:col-span-2",
};

/* large cells (index 0 and 3) span two columns from lg up */
const isLarge = (index: number) => index === 0 || index === 3;

export const OfficeList = ({ cards, renderAction }: OfficeListProps) => (
  <div className="grid gap-7 sm:grid-cols-2 lg:grid-flow-dense lg:auto-rows-[clamp(14rem,24vw,18rem)] lg:grid-cols-[1.15fr_0.7fr_1.15fr] lg:gap-6">
    {cards.map((card, index) => (
      <div
        key={card.key}
        className={clsx(
          "h-[clamp(17.375rem,48vw,19.375rem)] min-h-0 w-full lg:h-full",
          placementByIndex[index],
        )}
      >
        <OfficeCard
          image={card.image}
          title={card.title}
          description={card.description}
          action={renderAction(card, index)}
          sizes={
            isLarge(index)
              ? "(max-width: 1024px) 100vw, 66vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
      </div>
    ))}
  </div>
);
