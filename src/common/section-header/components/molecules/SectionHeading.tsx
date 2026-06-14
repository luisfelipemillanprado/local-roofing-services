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
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start"} ${
        isCenter ? "mx-auto max-w-2xl" : "max-w-xl"
      } ${className}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          theme === "dark" ? "text-white" : "text-[var(--fg)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${
            theme === "dark" ? "text-white/70" : "text-[var(--fg-muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
