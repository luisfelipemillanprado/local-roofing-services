import { GoogleMark } from "@/shared-sections/testimonials/components/atoms/GoogleMark";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { RatingBadgeProps } from "@/shared-sections/testimonials/types";

/* Google rating badge: logo + score with stars + review count */
export const RatingBadge = ({ score, count, reviews }: RatingBadgeProps) => (
  <div className="grid grid-flow-col items-center gap-2 rounded-2xl border border-line bg-surface-panel px-4 py-3">
    <GoogleMark />
    <div>
      <div className="grid grid-flow-col items-center justify-start gap-1.5">
        <TextNumber size="base" text={score} />
        <Stars />
      </div>
      <Text size="label" tone="muted" text={`${count} ${reviews}`} />
    </div>
  </div>
);
