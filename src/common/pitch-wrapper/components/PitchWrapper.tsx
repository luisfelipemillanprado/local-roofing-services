import type { PitchWrapperProps } from "@/common/pitch-wrapper/types";

/* two column band: sticky pitch column left, content right */
export const PitchWrapper = ({ heading, stats, action, children }: PitchWrapperProps) => (
  <div className="grid items-start gap-13 lg:grid-cols-[0.9fr_1.1fr]">
    <div className="grid gap-9 lg:sticky lg:top-28">
      {heading}
      {stats}
      <div className="mt-2 grid justify-center md:justify-start">{action}</div>
    </div>
    {children}
  </div>
);
