import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { ProcessList } from "@/features/service-detail/components/molecules/ProcessList";
import { serviceDetailData } from "@/data/pages/service-detail";
import { Container } from "@/common/container/components/Container";
import type { ServiceProcessProps } from "@/features/service-detail/types";

const { process } = serviceDetailData;

export const ServiceProcess = async ({ serviceKey, tone = "base" }: ServiceProcessProps) => {
  const t = await getTranslations("service-detail");

  /* shared skeleton: icon from data, number from order, text by key */
  const stepItems = process.map((item, i) => ({
    key: item.key,
    icon: item.icon,
    step: String(i + 1),
    title: t(`items.${serviceKey}.process.steps.${item.key}.title`),
    description: t(`items.${serviceKey}.process.steps.${item.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <SectionWrapper tone={tone}>
      <Container>
        <div className="grid gap-13">
          <SectionHeading
            align="center"
            eyebrow={t("processEyebrow")}
            title={t(`items.${serviceKey}.process.titleLead`)}
            accent={t(`items.${serviceKey}.process.titleAccent`)}
            description={t(`items.${serviceKey}.process.description`)}
          />
          <ProcessList steps={stepItems} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
