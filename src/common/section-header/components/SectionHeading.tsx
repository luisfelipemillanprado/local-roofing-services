import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { SectionHeadingProps } from "@/common/section-header/types";

/* center: left on tablet, centered on PC; left: cluster from sm; omit: About title from sm */
export const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  size = "section",
  align,
}: SectionHeadingProps) => {
  const isCenter = align === "center";
  const isFlush = align === "left";

  return (
    <div
      className={`grid grid-cols-1 justify-items-center gap-5.5 ${isCenter ? "sm:justify-items-start lg:justify-items-center" : isFlush ? "sm:justify-items-start" : "lg:justify-items-start"}`}
    >
      <Eyebrow text={eyebrow} />
      {/* title sets the width; description wraps within it, never wider */}
      <div
        className={`grid w-fit gap-5.5 text-left sm:max-w-130 lg:max-w-fit ${isCenter ? "lg:text-center" : !isFlush ? "sm:ml-5 sm:justify-self-start lg:ml-0" : ""}`}
      >
        <Title
          size={size}
          text={title}
          accent={accent}
          accentInline={isCenter ? true : isFlush && size === "banner" ? false : "until-lg"}
        />
        {/* w-0 keeps the title as the sole width driver; min-w-full then fills it */}
        <div className="w-0 min-w-full">
          <Text size="lead" tone="muted" text={description} />
        </div>
      </div>
    </div>
  );
};
