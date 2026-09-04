import type { PitchWrapperProps } from "@/common/pitch-wrapper/types";

/* two column band: sticky pitch column left, content right */
export const PitchWrapper = ({ heading, stats, action, children }: PitchWrapperProps) => (
  <div className="grid items-start gap-13 lg:grid-cols-[0.9fr_1.1fr]">
    {/* sm–lg: heading and action stack left, the stats column sits beside them */}
    <div className="grid gap-9 sm:max-lg:mr-5 sm:max-lg:grid-cols-[1fr_auto] sm:max-lg:items-start lg:sticky lg:top-28">
      {heading}
      <div className="sm:max-lg:col-start-2 sm:max-lg:row-span-2 sm:max-lg:row-start-1 sm:max-lg:self-center">
        {stats}
      </div>
      <div className="mt-2 grid justify-center sm:justify-start sm:max-lg:col-start-1 sm:max-lg:row-start-2">
        {action}
      </div>
    </div>
    {children}
  </div>
);
