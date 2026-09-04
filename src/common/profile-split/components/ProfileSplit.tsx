import type { ProfileSplitProps } from "@/common/profile-split/types";

/* split band: framed media with floating badge + contact left, heading/points/stats/action right */
export const ProfileSplit = ({
  media,
  badge,
  contact,
  heading,
  points,
  stats,
  action,
}: ProfileSplitProps) => (
  <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-13">
    {/* image side */}
    <div className="relative">
      {/* frame owns the form: square 1:1, 4:3 on tablet, square again from lg */}
      <div className="aspect-square overflow-hidden rounded-media shadow-lg sm:aspect-4/3 lg:aspect-square">
        {media}
      </div>

      {/* badge overhangs the top-right corner */}
      <div className="absolute top-7 -right-3">{badge}</div>

      {/* card straddles the image's bottom edge */}
      <div className="absolute bottom-0 left-6 translate-y-1/2">{contact}</div>
    </div>
    {/* copy side */}
    <div className="grid gap-7 text-center lg:text-left">
      {heading}
      {points}
      {/* stats and action take extra top margin beyond the gap for progressive spacing */}
      <div className="mt-2">{stats}</div>
      <div className="mt-2.5">{action}</div>
    </div>
  </div>
);
