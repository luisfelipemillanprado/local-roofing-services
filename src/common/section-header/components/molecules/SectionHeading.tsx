import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import type { SectionHeadingProps } from "@/common/section-header/types";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "items-center text-center mx-auto max-w-2xl"
      : align === "center-mobile"
        ? "items-center text-center mx-auto max-w-xl lg:items-start lg:text-left lg:mx-0"
        : "items-start max-w-xl";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          theme === "dark" ? "text-white" : "text-fg"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${
            theme === "dark" ? "text-white/70" : "text-fg-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
