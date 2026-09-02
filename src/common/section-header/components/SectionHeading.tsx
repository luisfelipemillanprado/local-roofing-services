import clsx from "clsx";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { SectionHeadingProps } from "@/common/section-header/types";

/* center: centered from sm; otherwise left-flush from sm (banner keeps its accent on its own line) */
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
  /* accent: inline when centered, own line for the flush banner, inline until lg otherwise */
  const accentInline = isCenter ? true : isFlush && size === "banner" ? false : "until-lg";

  return (
    /* gap-5.25 (not 5.5) absorbs the title's 1.3 half-leading, keeping the rhythm even */
    <div
      className={clsx(
        "grid grid-cols-1 justify-items-center gap-5.25",
        !isCenter && "sm:justify-items-start",
      )}
    >
      <Eyebrow text={eyebrow} />
      {/* title sets the width; description wraps within it, never wider */}
      <div
        className={clsx(
          "grid w-fit gap-5.25 sm:max-w-113 lg:max-w-fit",
          isCenter
            ? "text-left sm:text-center"
            : size === "banner"
              ? "text-center sm:text-left"
              : "text-left",
        )}
      >
        <Title size={size} text={title} accent={accent} accentInline={accentInline} />
        {/* w-0 keeps the title as the sole width driver; min-w-full then fills it */}
        <div className="w-0 min-w-full">
          <Text size="lead" tone="muted" text={description} />
        </div>
      </div>
    </div>
  );
};
