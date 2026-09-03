import type { PitchWrapperProps } from "@/common/pitch-wrapper/types";

/* two column band: sticky pitch column left, content right */
export const PitchWrapper = ({ heading, stats, action, children }: PitchWrapperProps) => (
  <div className="grid items-start gap-13 lg:grid-cols-[0.9fr_1.1fr]">
    {/* md only: heading and action stack left, the stats column sits beside them */}
    <div className="grid gap-9 md:max-lg:mr-5 md:max-lg:grid-cols-[1fr_auto] md:max-lg:items-start lg:sticky lg:top-28">
      {heading}
      <div className="md:max-lg:col-start-2 md:max-lg:row-span-2 md:max-lg:row-start-1 md:max-lg:self-center">
        {stats}
      </div>
      <div className="mt-2 grid justify-center sm:justify-start md:max-lg:col-start-1 md:max-lg:row-start-2">
        {action}
      </div>
    </div>
    {children}
  </div>
);
