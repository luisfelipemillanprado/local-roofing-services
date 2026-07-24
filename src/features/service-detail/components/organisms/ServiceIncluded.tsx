import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { IncludedPanel } from "@/features/service-detail/components/molecules/IncludedPanel";
import { Container } from "@/common/container/components/Container";
import type { ServiceIncludedProps } from "@/features/service-detail/types";

export const ServiceIncluded = async ({ serviceKey, tone = "muted" }: ServiceIncludedProps) => {
  const t = await getTranslations("service-detail");

  /* t.raw: the panels are plain text lists, not keyed items */
  const included = t.raw(`items.${serviceKey}.included`) as string[];
  const ideal = t.raw(`items.${serviceKey}.ideal`) as string[];

  return (
    <SectionWrapper tone={tone}>
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <IncludedPanel title={t("includedTitle")} items={included} />
          <IncludedPanel title={t("idealTitle")} items={ideal} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
