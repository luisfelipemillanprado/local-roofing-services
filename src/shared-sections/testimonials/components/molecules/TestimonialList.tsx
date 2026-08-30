import clsx from "clsx";
import { TestimonialCard } from "@/shared-sections/testimonials/components/molecules/TestimonialCard";
import type { TestimonialListProps } from "@/shared-sections/testimonials/types";

/* render loop: cards → TestimonialCard grid */
export const TestimonialList = ({ cards, logo }: TestimonialListProps) => (
  <div
    className={clsx(
      "grid gap-7 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7 lg:grid-cols-3 lg:gap-6",
      /* per-page group (6): last card hidden on mobile, shown from sm up */
      cards.length === 6 && "[&>*:last-child]:hidden sm:[&>*:last-child]:grid",
    )}
  >
    {cards.map(({ key, ...card }) => (
      <TestimonialCard key={key} {...card} logo={logo} />
    ))}
  </div>
);
