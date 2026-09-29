import clsx from "clsx";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { SectionHeadingProps } from "@/common/section-header/types";

/* flushFrom heading turns left-flush for the row layout; the md row recenters again from xl */
const flushJustify = { md: "md:max-xl:justify-items-start", lg: "lg:justify-items-start" } as const;
const flushText = { md: "md:max-xl:text-left", lg: "lg:text-left" } as const;

/* center: centered from sm; otherwise left-flush from sm (banner keeps its accent on its own line) */
export const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  size = "section",
  align,
  flushFrom,
}: SectionHeadingProps) => {
  const isCenter = align === "center";
  /* flushFrom row heading forces the accent onto its own line at lg for the two-line look */
  const accentInline = flushFrom
    ? "until-lg"
    : isCenter
      ? true
      : align === "left" && size === "banner"
        ? false
        : "until-lg";

  return (
    /* gap-5.25 (not 5.5) absorbs the title's 1.3 half-leading, keeping the rhythm even */
    <div
      className={clsx(
        "grid grid-cols-1 justify-items-center gap-5.25",
        !isCenter && "sm:justify-items-start",
        flushFrom && flushJustify[flushFrom],
      )}
    >
      <Eyebrow text={eyebrow} />
      {/* title sets the width; description wraps within it, never wider */}
      <div
        className={clsx(
          "grid w-fit gap-5.25 sm:max-w-113 lg:max-w-126",
          isCenter
            ? "text-left sm:text-center"
            : size === "banner"
              ? "text-center sm:text-left"
              : "text-left",
          flushFrom && flushText[flushFrom],
          /* md-flush headings recenter at xl: drop the cap so the title spans a single line */
          flushFrom === "md" && "xl:max-w-none",
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
