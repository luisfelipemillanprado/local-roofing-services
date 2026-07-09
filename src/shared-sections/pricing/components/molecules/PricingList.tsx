import { PricingCard } from "@/shared-sections/pricing/components/molecules/PricingCard";
import type { PricingListProps } from "@/shared-sections/pricing/types";

/* render loop: cards → PricingCard grid */
export const PricingList = ({ cards, chooseLabel, chooseHref, popular }: PricingListProps) => (
  <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
    {cards.map(({ key, ...card }) => (
      <PricingCard key={key} {...card} chooseLabel={chooseLabel} chooseHref={chooseHref} popular={popular} />
    ))}
  </div>
);
