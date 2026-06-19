import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import type { PageHeaderProps } from "@/common/page-header/types";

/** Intro band for the dedicated pages, with top padding to clear the fixed navbar. */
export const PageHeader = ({ eyebrow, titleLead, titleAccent, description }: PageHeaderProps) => {
  return (
    <section className="bg-surface-base pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <Text as="span" size="label" tone="primary" text={eyebrow} />
          </span>
          <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold text-foreground sm:text-5xl lg:text-6xl">
            {titleLead} <span className="text-primary">{titleAccent}</span>
          </h1>
          <div className="mt-5 max-w-xl">
            <Text size="lead" tone="muted" text={description} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
