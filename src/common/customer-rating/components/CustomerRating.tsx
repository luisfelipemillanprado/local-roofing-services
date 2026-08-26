import { Avatar } from "@/common/avatar/components/Avatar";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import type { CustomerRatingProps } from "@/common/customer-rating/types";

/* avatars shown on mobile; extras reveal at tablet so the label fits */
const mobileAvatars = 3;

/* social proof: avatars + stars + count */
export const CustomerRating = ({ avatars, label }: CustomerRatingProps) => (
  <div className="inline-grid max-w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
    {/* decorative: the label carries the meaning, so alt stays empty */}
    {/* pr-3 offsets the -space-x-3 overflow on mobile; tablet+ sizes to content */}
    <div className="flex -space-x-3 pr-3 sm:pr-0">
      {avatars.slice(0, mobileAvatars).map((src) => (
        <Avatar key={src} src={src} alt="" bordered />
      ))}
      {/* sm:flex (not block) so the inline Avatar keeps its 44px box */}
      {avatars.slice(mobileAvatars).map((src) => (
        <span key={src} className="hidden sm:flex">
          <Avatar src={src} alt="" bordered />
        </span>
      ))}
    </div>
    {/* min-w-0 lets the grid child shrink so truncate works */}
    <div className="min-w-0">
      <Stars />
      <Text size="body" tone="default" weight="semibold" truncate text={label} />
    </div>
  </div>
);
