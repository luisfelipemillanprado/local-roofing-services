import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { IconCard } from "@/common/icon-card/components/IconCard";
import { processData } from "@/data/pages/services";
import { Container } from "@/common/container/components/Container";

export const ProcessSteps = async () => {
  const t = await getTranslations("services-page.process");
  const items = processData.steps;

  return (
    <SectionWrapper>
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("titleLead")}
          accent={t("titleAccent")}
          description={t("description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((step, i) => (
            <IconCard
              key={step.key}
              icon={step.icon}
              title={t(`steps.${step.key}.title`)}
              description={t(`steps.${step.key}.description`)}
              delay={i * 0.08}
              step={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
