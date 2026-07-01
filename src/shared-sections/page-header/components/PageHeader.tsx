import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { PageHeaderProps } from "@/shared-sections/page-header/types";

/** Always-dark intro band for the dedicated pages, with top padding to clear the fixed navbar. */
export const PageHeader = ({ eyebrow, titleLead, titleAccent, description }: PageHeaderProps) => {
  return (
    <section className="theme-dark bg-surface-base pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <Eyebrow text={eyebrow} />
          <div className="mt-4">
            <Title as="h1" size="page" text={titleLead} accent={titleAccent} />
          </div>
          <div className="mt-5 max-w-xl">
            <Text size="lead" tone="muted" text={description} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
