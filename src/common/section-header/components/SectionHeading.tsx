import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import type { SectionHeadingProps } from "@/common/section-header/types";

/* centered on mobile, left-aligned from md */
export const SectionHeading = ({ eyebrow, title, accent, description }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-5 text-center md:max-w-xl md:items-start md:text-left">
      <Eyebrow text={eyebrow} />
      <Title as="h2" size="section" text={title} accent={accent} />
      <div className="max-w-76.5 m390:max-w-xs md:max-w-none">
        <Text size="lead" tone="muted" text={description} />
      </div>
    </div>
  );
};
