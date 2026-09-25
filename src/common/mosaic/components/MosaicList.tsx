import clsx from "clsx";
import { Fragment } from "react";
import { MosaicCard } from "@/common/mosaic/components/MosaicCard";
import type { MosaicListProps } from "@/common/mosaic/types";

/* lg bento cycle of six: the large tile opens on the left, the next one closes on the right */
const placementBySlot: Record<number, string> = {
  0: "lg:col-start-1 lg:col-span-2 lg:row-span-2",
  1: "lg:col-start-3",
  2: "lg:col-start-3",
  3: "lg:col-start-1",
  4: "lg:col-start-1",
  5: "lg:col-start-2 lg:col-span-2 lg:row-span-2",
};

export const MosaicList = ({ cards, renderAction, pattern = "leading", insert }: MosaicListProps) => {
  /* centered is the same cycle entered half way, so its large tile opens on the right */
  const offset = pattern === "centered" ? 3 : 0;
  const slotAt = (index: number) => (index + offset) % 6;
  const isFeatured = (index: number) => slotAt(index) === 0 || slotAt(index) === 5;

  return (
    <div className="grid gap-7 lg:grid-flow-dense lg:auto-rows-[clamp(11rem,20vw,16rem)] lg:grid-cols-[1.15fr_0.7fr_1.15fr] lg:gap-6">
      {Array.from({ length: Math.ceil(cards.length / 3) }, (_, groupIndex) => {
        const group = cards.slice(groupIndex * 3, groupIndex * 3 + 3);
        /* keeps the large tile on top of its sm pair when it would otherwise land last */
        const largeLastInGroup = isFeatured(groupIndex * 3 + group.length - 1);

        return (
          <Fragment key={groupIndex}>
            {/* the insert sits between the first and second group, one group tall from lg */}
            {insert && groupIndex === 1 && <div className="lg:col-span-3 lg:row-span-2">{insert}</div>}
            <div className="contents sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7 lg:contents">
              {group.map((card, slot) => {
                const index = groupIndex * 3 + slot;
                const featured = isFeatured(index);

                return (
                  <div
                    key={card.key}
                    className={clsx(
                      "h-[clamp(17.375rem,48vw,19.375rem)] min-h-0 w-full lg:h-full",
                      featured && "sm:col-span-2",
                      largeLastInGroup &&
                        (featured ? "sm:row-start-1 lg:row-start-auto" : "sm:row-start-2 lg:row-start-auto"),
                      placementBySlot[slotAt(index)],
                      /* a six card set hides its last tile on mobile, shown from sm up */
                      cards.length === 6 && index === 5 && "hidden sm:block",
                    )}
                  >
                    <MosaicCard
                      image={card.image}
                      title={card.title}
                      description={card.description}
                      action={renderAction(card, index)}
                      sizes={
                        featured
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
