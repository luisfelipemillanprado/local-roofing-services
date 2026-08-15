import { TestimonialCard } from "@/shared-sections/testimonials/components/molecules/TestimonialCard";
import type { TestimonialListProps } from "@/shared-sections/testimonials/types";

/* render loop: cards → TestimonialCard grid */
export const TestimonialList = ({ cards }: TestimonialListProps) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {cards.map(({ key, ...card }) => (
      <TestimonialCard key={key} {...card} />
    ))}
  </div>
);
