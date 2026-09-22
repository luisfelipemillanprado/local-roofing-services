import { HardHat } from "lucide-react";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import type { InstallCalloutProps } from "@/features/shop/types";

/* upsell from the product into the install crew; lands on the same contact form */
export const InstallCallout = ({ title, description, ctaLabel, ctaHref }: InstallCalloutProps) => (
  /* always stacks the CTA: the callout lives inside the half width product column */
  <div className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-card border border-line bg-surface-panel p-5">
    <HardHat aria-hidden className="size-9 text-primary" />
    <div className="grid gap-1">
      <Title as="h3" size="card" weight="bold" text={title} />
      <Text size="caption" tone="muted" text={description} />
    </div>
    <div className="col-span-2 justify-self-start">
      <Button href={ctaHref} variant="secondary">
        {ctaLabel}
      </Button>
    </div>
  </div>
);
