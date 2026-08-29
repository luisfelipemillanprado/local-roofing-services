import clsx from "clsx";
import { ProjectTile } from "@/shared-sections/projects/components/molecules/ProjectTile";
import type { ProjectGridProps } from "@/shared-sections/projects/types";

/* gallery: 3-col bento from lg (large + two stacked, side alternates); 1/2-col below */
export const ProjectMasonryGrid = ({ cards, renderAction }: ProjectGridProps) => {
  const groups = Array.from({ length: Math.ceil(cards.length / 3) }, (_, i) => cards.slice(i * 3, i * 3 + 3));

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
      {groups.map((group, groupIndex) => {
        const largeFirst = groupIndex % 2 === 0;
        return (
          <div
            key={group[0].key}
            className={clsx(
              "contents lg:grid lg:h-[clamp(22rem,40vw,32rem)] lg:grid-rows-2 lg:gap-6",
              largeFirst
                ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
                : "lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]",
            )}
          >
            {group.map((card, i) => {
              const featured = largeFirst ? i === 0 : i === group.length - 1;
              const index = groupIndex * 3 + i;
              return (
                <div
                  key={card.key}
                  className={clsx(
                    "h-[clamp(14rem,48vw,18rem)] min-h-0 w-full lg:h-full",
                    featured && largeFirst && "lg:row-span-2",
                    featured && !largeFirst && "lg:col-start-2 lg:row-span-2 lg:row-start-1",
                    !featured && !largeFirst && "lg:col-start-1",
                  )}
                >
                  <ProjectTile
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    action={renderAction(card, index)}
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
      })}
    </div>
  );
};
