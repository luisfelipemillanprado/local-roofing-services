import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { SectionHeadingProps } from "@/common/section-header/types";

export const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto max-w-2xl"
      : align === "center-mobile"
        ? "items-center text-center mx-auto max-w-xl lg:items-start lg:text-left lg:mx-0"
        : "items-start max-w-xl";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      <Eyebrow text={eyebrow} />
      <Title as="h2" size="section" text={title} accent={accent} />
      {description && <Text size="lead" tone="muted" text={description} />}
    </Reveal>
  );
};
