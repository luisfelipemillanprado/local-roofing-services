import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { StatList } from "@/common/stat-list/components/StatList";
import { IconCardList } from "@/common/icon-card-list/components/IconCardList";
import { getTranslations } from "next-intl/server";
import { valuesData } from "@/data/pages/about";
import { Container } from "@/common/container/components/Container";

const { ctaHref, items, stats } = valuesData;

export const Values = async () => {
  const t = await getTranslations("about-page.values");

  /* stats: value from data, label by key */
  const statItems = stats.map((stat) => ({
    key: stat.key,
    icon: stat.icon,
    value: stat.value,
    label: t(`stats.${stat.key}.label`),
  }));

  /* values: text by key, stagger delay */
  const valueItems = items.map((value, i) => ({
    key: value.key,
    icon: value.icon,
    title: t(`items.${value.key}.title`),
    description: t(`items.${value.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <SectionWrapper tone="muted">
      <Container>
        <div className="grid items-start gap-13 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-9 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("titleLead")}
              accent={t("titleAccent")}
              description={t("description")}
            />

            <StatList stats={statItems} tone="panel" />

            <div className="mt-2 grid justify-center md:justify-start">
              <Button href={ctaHref.href} variant="secondary" pulse>
                {t(ctaHref.key)}
              </Button>
            </div>
          </div>

          <IconCardList cards={valueItems} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
