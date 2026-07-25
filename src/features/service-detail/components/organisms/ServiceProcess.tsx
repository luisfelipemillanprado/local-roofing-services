import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { PitchWrapper } from "@/common/pitch-wrapper/components/PitchWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { StatList } from "@/common/stat-list/components/StatList";
import { IconCardList } from "@/common/icon-card-list/components/IconCardList";
import { serviceDetailData } from "@/data/pages/service-detail";
import { Container } from "@/common/container/components/Container";
import type { ServiceProcessProps } from "@/features/service-detail/types";

const { process, stats, ctaHref } = serviceDetailData;

export const ServiceProcess = async ({ serviceKey, tone = "base" }: ServiceProcessProps) => {
  const t = await getTranslations("service-detail");

  /* stats: brand chips, same for every service */
  const statItems = stats.map((stat) => ({
    key: stat.key,
    icon: stat.icon,
    value: t(`stats.${stat.key}.value`),
    label: t(`stats.${stat.key}.label`),
  }));

  /* cards: per-service steps, icon from data, text by key */
  const cardItems = process.map((item, i) => ({
    key: item.key,
    icon: item.icon,
    title: t(`items.${serviceKey}.process.steps.${item.key}.title`),
    description: t(`items.${serviceKey}.process.steps.${item.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <SectionWrapper tone={tone}>
      <Container>
        <PitchWrapper
          heading={
            <SectionHeading
              eyebrow={t("processEyebrow")}
              title={t(`items.${serviceKey}.process.titleLead`)}
              accent={t(`items.${serviceKey}.process.titleAccent`)}
              description={t(`items.${serviceKey}.process.description`)}
            />
          }
          stats={<StatList stats={statItems} />}
          action={
            <Button href={ctaHref.href} variant="secondary" pulse>
              {t(ctaHref.key)}
            </Button>
          }
        >
          <IconCardList cards={cardItems} />
        </PitchWrapper>
      </Container>
    </SectionWrapper>
  );
};
