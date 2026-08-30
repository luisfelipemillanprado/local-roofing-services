import clsx from "clsx";
import { ProjectCard } from "@/shared-sections/projects/components/molecules/ProjectCard";
import type { ProjectListProps } from "@/shared-sections/projects/types";

/* lg bento slot: large left + two stacked, then two stacked + large right */
const placementByPattern: Record<number, string> = {
  0: "lg:col-start-1 lg:col-span-2 lg:row-span-2",
  1: "lg:col-start-3",
  2: "lg:col-start-3",
  3: "lg:col-start-1",
  4: "lg:col-start-1",
  5: "lg:col-start-2 lg:col-span-2 lg:row-span-2",
};

export const ProjectList = ({ cards, renderAction }: ProjectListProps) => (
  <div className="grid gap-7 lg:grid-flow-dense lg:auto-rows-[clamp(11rem,20vw,16rem)] lg:grid-cols-3 lg:gap-6">
    {Array.from({ length: Math.ceil(cards.length / 3) }, (_, groupIndex) => {
      const group = cards.slice(groupIndex * 3, groupIndex * 3 + 3);
      const lastIndex = groupIndex * 3 + group.length - 1;
      const largeLastInGroup = lastIndex % 6 === 0 || lastIndex % 6 === 5;

      return (
        <div key={group[0].key} className="contents sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7 lg:contents">
          {group.map((card, slot) => {
            const index = groupIndex * 3 + slot;
            const featured = index % 6 === 0 || index % 6 === 5;

            return (
              <div
                key={card.key}
                className={clsx(
                  "h-[clamp(17.375rem,48vw,19.375rem)] min-h-0 w-full lg:h-full",
                  featured && "sm:col-span-2",
                  largeLastInGroup &&
                    (featured ? "sm:row-start-1 lg:row-start-auto" : "sm:row-start-2 lg:row-start-auto"),
                  placementByPattern[index % 6],
                  /* home/about summary (6): last card hidden on mobile, shown from sm up */
                  cards.length === 6 && index === 5 && "hidden sm:block",
                )}
              >
                <ProjectCard
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
      );
    })}
  </div>
);
