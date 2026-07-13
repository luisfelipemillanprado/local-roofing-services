import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { SectionHeadingProps } from "@/common/section-header/types";

/* centered until lg; lg+ follows align (left by default) */
export const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  size = "section",
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div
      className={`grid grid-cols-1 justify-items-center gap-5 text-center ${
        align === "left" ? "lg:max-w-xl lg:justify-items-start lg:text-left" : ""
      }`}
    >
      <Eyebrow text={eyebrow} />
      {/* centered headings run lead + accent as one line on desktop */}
      <div className="md:max-w-xl lg:max-w-none">
        <Title as="h2" size={size} text={title} accent={accent} accentInline={align === "center"} />
      </div>
      {/* the description caps its own reading width; the title runs free */}
      <div className="max-w-[clamp(19.125rem,8.625rem+46.6667vw,20rem)] md:max-w-xl">
        <Text size="lead" tone="muted" text={description} />
      </div>
    </div>
  );
};
