import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import type { SectionHeadingProps } from "@/common/section-header/types";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
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
      <span className="eyebrow">
        <Text as="span" size="label" tone="primary" text={eyebrow} />
      </span>
      <h2
        className={`text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-[2.75rem] ${
          theme === "dark" ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description &&
        // Always-dark surfaces keep light text; theme-aware ones use foreground-muted.
        (theme === "dark" ? (
          <p className="text-base leading-relaxed text-white/70">{description}</p>
        ) : (
          <Text size="lead" tone="muted" text={description} />
        ))}
    </Reveal>
  );
};
