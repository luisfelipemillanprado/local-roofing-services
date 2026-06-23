import { Button } from "@/common/button/components/atoms/Button";
import type { HeroActionsProps } from "@/features/home/types";

/* Hero CTAs: primary + ghost actions. */
export const HeroActions = ({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroActionsProps) => (
  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
    <Button href={primaryHref} variant="primary" withArrow>
      {primaryLabel}
    </Button>
    <Button href={secondaryHref} variant="ghost">
      {secondaryLabel}
    </Button>
  </div>
);
