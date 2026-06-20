import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import { processSection } from "@/data/pages/services";

export const ProcessSteps = async () => {
  const t = await getTranslations("services-page.process");
  const items = processSection.steps;

  return (
    <section className="bg-surface-base py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          align="center"
          title={t("titleLead")}
          accent={t("titleAccent")}
          description={t("description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((step, i) => {
            return (
              <Reveal
                as="article"
                key={step.key}
                delay={i * 0.08}
                className="rounded-card border border-line bg-surface-panel p-7"
              >
                <TextNumber size="base" tone="primary" text={String(i + 1).padStart(2, "0")} />
                <div className="mt-4">
                  <IconBadge icon={step.icon} size="feature" tone="muted" />
                </div>
                <div className="mt-5">
                  <Title as="h3" size="card" weight="bold" text={t(`steps.${step.key}.title`)} />
                </div>
                <div className="mt-2">
                  <Text size="body" tone="muted" text={t(`steps.${step.key}.description`)} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
