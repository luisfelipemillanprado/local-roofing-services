import clsx from "clsx";
import { TestimonialCard } from "@/shared-sections/testimonials/components/molecules/TestimonialCard";
import type { TestimonialListProps } from "@/shared-sections/testimonials/types";

/* render loop: cards → TestimonialCard grid */
export const TestimonialList = ({ cards, logo }: TestimonialListProps) => (
  <div
    className={clsx(
      "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
      /* per-page group (6): last card hidden on mobile, shown from md up */
      cards.length === 6 && "[&>*:last-child]:hidden md:[&>*:last-child]:grid",
    )}
  >
    {cards.map(({ key, ...card }) => (
      <TestimonialCard key={key} {...card} logo={logo} />
    ))}
  </div>
);
