import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
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
          theme === "dark" ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${
            theme === "dark" ? "text-white/70" : "text-[var(--color-muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
