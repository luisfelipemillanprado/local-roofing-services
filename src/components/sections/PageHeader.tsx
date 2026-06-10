import Reveal from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
};

/** Intro band for the dedicated pages, with top padding to clear the fixed navbar. */
export default function PageHeader({
  eyebrow,
  titleLead,
  titleAccent,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-[var(--page-bg)] pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-[var(--fg)] sm:text-5xl lg:text-6xl">
            {titleLead}{" "}
            <span className="text-[var(--color-primary)]">{titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--fg-muted)]">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
