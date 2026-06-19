import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { getTranslations } from "next-intl/server";
import { servicesSection } from "@/data/sections/services";
import type { ServicesProps } from "@/common/service/types";

export const Services = async ({ exploreHref, limit }: ServicesProps = {}) => {
  const t = await getTranslations("service");
  const tc = await getTranslations("common");
  // Data drives order + icon/image/blur; text is resolved by key (no index merge).
  // `limit` lets the home show a 3-card summary while /services shows all of them.
  const services = servicesSection.items.slice(0, limit);

  return (
    <section id="services" className="bg-surface-muted py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow={t("eyebrow")}
            align="center"
            title={
              <>
                {t("titleLead")}
                <span className="block text-primary">{t("titleAccent")}</span>
              </>
            }
            description={t("description")}
          />
          {exploreHref && (
            <Button href={exploreHref} variant="primary" withArrow className="shrink-0">
              {t("exploreAll")}
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const title = t(`items.${service.key}.title`);
            return (
              <Reveal
                as="article"
                key={service.key}
                delay={i * 0.08}
                className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface-panel shadow-md shadow-shade/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={title}
                    fill
                    placeholder="blur"
                    blurDataURL={service.blur}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 grid size-12 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-shade/40">
                    <Icon className="size-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  <div className="mt-3 flex-1">
                    <Text size="body" tone="muted" text={t(`items.${service.key}.description`)} />
                  </div>
                  <Link href="#contact" className="mt-5 inline-flex items-center gap-2">
                    <Text as="span" size="caption" tone="primary" weight="semibold" text={tc("learnMore")} />
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
