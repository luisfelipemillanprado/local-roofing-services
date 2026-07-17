import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { PitchWrapper } from "@/common/pitch-wrapper/components/PitchWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { StatList } from "@/common/stat-list/components/StatList";
import { IconCardList } from "@/common/icon-card-list/components/IconCardList";
import { getTranslations } from "next-intl/server";
import { pitchData } from "@/data/sections/pitch";
import type { PitchProps } from "@/shared-sections/pitch/types";
import { Container } from "@/common/container/components/Container";

export const Pitch = async ({ variant, tone = "base" }: PitchProps) => {
  const t = await getTranslations("pitch");
  const { ctaHref, items, stats } = pitchData[variant];

  /* stats: value from data, label by key */
  const statItems = stats.map((stat) => ({
    key: stat.key,
    icon: stat.icon,
    value: stat.value,
    label: t(`${stat.key}.label`),
  }));

  /* cards: text by key, stagger delay */
  const cardItems = items.map((item, i) => ({
    key: item.key,
    icon: item.icon,
    title: t(`${item.key}.title`),
    description: t(`${item.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <SectionWrapper tone={tone}>
      <Container>
        <PitchWrapper
          heading={
            <SectionHeading
              eyebrow={t(`${variant}.eyebrow`)}
              title={t(`${variant}.titleLead`)}
              accent={t(`${variant}.titleAccent`)}
              description={t(`${variant}.description`)}
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
