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
  <div className="grid gap-6 md:grid-cols-2 lg:grid-flow-dense lg:auto-rows-[clamp(11rem,20vw,16rem)] lg:grid-cols-3">
    {cards.map((card, index) => {
      const featured = index % 6 === 0 || index % 6 === 5;
      return (
        <div
          key={card.key}
          className={clsx(
            "h-[clamp(16rem,48vw,18rem)] min-h-0 w-full lg:h-full",
            placementByPattern[index % 6],
            /* home/about summary (6): last card hidden on mobile, shown from md up */
            cards.length === 6 && index === 5 && "hidden md:block",
          )}
        >
          <ProjectCard
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
