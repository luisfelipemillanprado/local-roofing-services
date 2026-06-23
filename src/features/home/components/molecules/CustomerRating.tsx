import { Avatar } from "@/common/avatar/components/Avatar";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import type { CustomerRatingProps } from "@/features/home/types";

/* Hero social proof: avatar stack + star rating + customer count. */
export const CustomerRating = ({ avatars, label }: CustomerRatingProps) => (
  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
    <div className="flex -space-x-3">
      {avatars.map((src) => (
        <Avatar key={src} src={src} alt="" bordered />
      ))}
    </div>
    <div>
      <Stars />
      <Text size="caption" tone="default" weight="semibold" text={label} />
    </div>
  </div>
);
