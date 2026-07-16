import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { ValuesList } from "@/features/about/components/molecules/ValuesList";
import { getTranslations } from "next-intl/server";
import { valuesData } from "@/data/pages/about";
import { Container } from "@/common/container/components/Container";

const { items } = valuesData;

export const Values = async () => {
  const t = await getTranslations("about-page.values");

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
        <div className="grid gap-14">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />

          <ValuesList values={valueItems} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
