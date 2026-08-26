import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { SectionHeadingProps } from "@/common/section-header/types";

/* mobile centered; lg follows align */
export const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  size = "section",
  align = "left",
}: SectionHeadingProps) => (
  <div
    className={`grid grid-cols-1 justify-items-center gap-5.5 ${align !== "center" ? "lg:justify-items-start" : ""}`}
  >
    <Eyebrow text={eyebrow} />
    {/* title sets the width; description wraps within it, never wider */}
    <div className={`grid w-fit gap-5.5 text-left ${align === "center" ? "lg:text-center" : ""}`}>
      <Title as="h2" size={size} text={title} accent={accent} accentInline={align === "center"} />
      {/* w-0 keeps the title as the sole width driver; min-w-full then fills it */}
      <div className="w-0 min-w-full">
        <Text size="lead" tone="muted" text={description} />
      </div>
    </div>
  </div>
);
