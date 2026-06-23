import { Avatar } from "@/common/avatar/components/Avatar";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import type { CustomerRatingProps } from "@/features/home/types";

/* Hero social proof: avatars + stars + count. */
export const CustomerRating = ({ avatars, label }: CustomerRatingProps) => (
  <div className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
    <div className="flex -space-x-3">
      {avatars.map((src) => (
        <Avatar key={src} src={src} alt="" bordered />
      ))}
    </div>
    <div className="min-w-0">
      <Stars />
      <Text size="body" tone="default" weight="semibold" truncate text={label} />
    </div>
  </div>
);
