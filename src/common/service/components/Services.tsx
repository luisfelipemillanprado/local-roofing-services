import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Media } from "@/common/media/components/Media";
import { Button } from "@/common/call-to-actions/components/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { getTranslations } from "next-intl/server";
import { servicesSection } from "@/data/sections/services";
import type { ServicesProps } from "@/common/service/types";

export const Services = async ({ exploreHref, limit }: ServicesProps = {}) => {
  const t = await getTranslations("service");
  /* Data drives order + icon/image; text resolved by key. */
  /* `limit` shows a short summary on home; full list on /services. */
  const services = servicesSection.items.slice(0, limit);

  return (
    <Section id="services" tone="muted">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          {exploreHref && (
            <Button href={exploreHref} variant="secondary">
              {t("viewAll")}
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const title = t(`items.${service.key}.title`);
            return (
              <Reveal
                as="article"
                key={service.key}
                delay={i * 0.08}
                className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface-panel shadow-md shadow-shade/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative">
                  <Media
                    src={service.image}
                    alt={title}
                    shape="wide"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-4 left-4">
                    <IconBadge icon={service.icon} size="card" tone="solid" shadow />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Title as="h3" size="feature" weight="bold" text={title} />
                  <div className="mt-3 flex-1">
                    <Text size="body" tone="muted" text={t(`items.${service.key}.description`)} />
                  </div>
                  <Link href="#contact" className="mt-5 inline-flex items-center gap-2">
                    <Text as="span" size="caption" tone="primary" weight="semibold" text={t("learnMore")} />
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
