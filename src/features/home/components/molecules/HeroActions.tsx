import { Button } from "@/common/call-to-actions/components/Button";
import type { HeroActionsProps } from "@/features/home/types";

/* Hero CTAs: primary + ghost actions. */
export const HeroActions = ({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroActionsProps) => (
  <div className="grid justify-items-start gap-5 sm:grid-flow-col sm:items-center sm:justify-start">
    <Button href={primaryHref} variant="primary">
      {primaryLabel}
    </Button>
    <Button href={secondaryHref} variant="ghost">
      {secondaryLabel}
    </Button>
  </div>
);
