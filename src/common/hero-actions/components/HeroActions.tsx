import { Button } from "@/common/call-to-actions/components/Button";
import type { HeroActionsProps } from "@/common/hero-actions/types";

/* hero band CTA pair: primary + ghost */
export const HeroActions = ({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroActionsProps) => (
  <div className="grid justify-items-start gap-5 sm:grid-flow-col sm:items-center sm:justify-start">
    <Button href={primaryHref} variant="primary" pulse>
      {primaryLabel}
    </Button>
    <Button href={secondaryHref} variant="ghost">
      {secondaryLabel}
    </Button>
  </div>
);
