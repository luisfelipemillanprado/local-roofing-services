import clsx from "clsx";
import { Fragment } from "react";
import { MosaicCard } from "@/common/mosaic/components/MosaicCard";
import type { MosaicListProps, MosaicPattern } from "@/common/mosaic/types";

/* lg bento slot per pattern: leading opens with the large tile, centered puts it third */
const placementByPattern: Record<MosaicPattern, Record<number, string>> = {
  leading: {
    0: "lg:col-start-1 lg:col-span-2 lg:row-span-2",
    1: "lg:col-start-3",
    2: "lg:col-start-3",
    3: "lg:col-start-1",
    4: "lg:col-start-1",
    5: "lg:col-start-2 lg:col-span-2 lg:row-span-2",
  },
  centered: {
    0: "lg:col-start-1",
    1: "lg:col-start-1",
    2: "lg:col-start-2 lg:col-span-2 lg:row-span-2",
    3: "lg:col-start-1 lg:col-span-2 lg:row-span-2",
    4: "lg:col-start-3",
    5: "lg:col-start-3",
  },
};

/* the two slots each pattern blows up to double size */
const featuredSlots: Record<MosaicPattern, readonly number[]> = {
  leading: [0, 5],
  centered: [2, 3],
};

export const MosaicList = ({ cards, renderAction, pattern = "leading", insert }: MosaicListProps) => (
  <div className="grid gap-7 lg:grid-flow-dense lg:auto-rows-[clamp(11rem,20vw,16rem)] lg:grid-cols-[1.15fr_0.7fr_1.15fr] lg:gap-6">
    {Array.from({ length: Math.ceil(cards.length / 3) }, (_, groupIndex) => {
      const group = cards.slice(groupIndex * 3, groupIndex * 3 + 3);
      const lastIndex = groupIndex * 3 + group.length - 1;
      const largeLastInGroup = featuredSlots[pattern].includes(lastIndex % 6);

      return (
        <Fragment key={group[0]!.key}>
          {/* the insert sits between the first and second group, one group tall from lg */}
          {insert && groupIndex === 1 && <div className="lg:col-span-3 lg:row-span-2">{insert}</div>}
          <div className="contents sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7 lg:contents">
            {group.map((card, slot) => {
              const index = groupIndex * 3 + slot;
              const featured = featuredSlots[pattern].includes(index % 6);

              return (
                <div
                  key={card.key}
                  className={clsx(
                    "h-[clamp(17.375rem,48vw,19.375rem)] min-h-0 w-full lg:h-full",
                    featured && "sm:col-span-2",
                    largeLastInGroup &&
                      (featured ? "sm:row-start-1 lg:row-start-auto" : "sm:row-start-2 lg:row-start-auto"),
                    placementByPattern[pattern][index % 6],
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
