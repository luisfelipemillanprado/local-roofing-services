import { Button } from "@/common/call-to-actions/components/Button";
import type { HeroActionsProps } from "@/features/home/types";

/* Hero CTAs: primary + ghost actions. */
export const HeroActions = ({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroActionsProps) => (
  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
    <Button href={primaryHref} variant="primary">
      {primaryLabel}
    </Button>
    <Button href={secondaryHref} variant="ghost">
      {secondaryLabel}
    </Button>
  </div>
);
