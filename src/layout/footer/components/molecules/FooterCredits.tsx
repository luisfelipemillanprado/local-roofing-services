import { Text } from "@/common/text/components/Text";
import type { FooterCreditsProps } from "@/layout/footer/types";

/* credits bar: copyright + builder credit left, legal links right */
export const FooterCredits = ({ copyright, builtByLabel, builder, privacy, terms }: FooterCreditsProps) => (
  <div className="grid justify-items-center gap-3 py-6 lg:grid-flow-col lg:justify-between">
    {/* stacked on mobile; one continued line from lg */}
    <div className="grid justify-items-center gap-1 lg:grid-flow-col lg:items-center lg:justify-start lg:gap-1.5">
      <Text as="span" size="body" tone="muted" text={copyright} />
      <div className="grid grid-flow-col items-center justify-start gap-1.5">
        <Text as="span" size="body" tone="muted" text={builtByLabel} />
        <a href={builder.href}>
          <Text as="span" size="body" tone="muted" weight="medium" text={builder.label} />
        </a>
      </div>
    </div>
    <div className="grid grid-flow-col gap-6">
      <a href={privacy.href}>
        <Text as="span" size="body" tone="muted" text={privacy.label} />
      </a>
      <a href={terms.href}>
        <Text as="span" size="body" tone="muted" text={terms.label} />
      </a>
    </div>
  </div>
);
