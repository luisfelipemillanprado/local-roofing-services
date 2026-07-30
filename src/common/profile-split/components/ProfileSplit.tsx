import type { ProfileSplitProps } from "@/common/profile-split/types";

/* split band: framed media with floating badge + contact left, heading/points/stats/cta right */
export const ProfileSplit = ({
  media,
  badge,
  contact,
  heading,
  points,
  stats,
  action,
}: ProfileSplitProps) => (
  <div className="grid items-center gap-19 lg:grid-cols-2">
    {/* Image side */}
    <div className="relative">
      <div className="overflow-hidden rounded-card shadow-lg">{media}</div>

      {/* badge overhangs the top-right corner */}
      <div className="absolute top-7 -right-3">{badge}</div>

      {/* card straddles the image's bottom edge */}
      <div className="absolute bottom-0 left-6 translate-y-1/2">{contact}</div>
    </div>

    {/* Copy side */}
    <div className="grid gap-7 text-center lg:text-left">
      {heading}
      {points}
      <div className="mt-2">{stats}</div>
      <div className="mt-2">{action}</div>
    </div>
  </div>
);
