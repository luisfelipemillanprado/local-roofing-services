import { FaqCard } from "@/shared-sections/faq/components/molecules/FaqCard";
import type { FaqListProps } from "@/shared-sections/faq/types";

/* render loop: cards → FaqCard accordion */
export const FaqList = ({ cards }: FaqListProps) => (
  <div className="grid gap-7 lg:gap-6">
    {cards.map(({ key, ...card }) => (
      <FaqCard key={key} {...card} />
    ))}
  </div>
);
