import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { servicesSection } from "@/data/sections/services";
import type { ServicesProps } from "@/common/service/types";

export async function Services({ exploreHref, limit }: ServicesProps = {}) {
  const t = await getTranslations("service");
  const tc = await getTranslations("common");
  // Data drives order + icon/image/blur; text is resolved by key (no index merge).
  // `limit` lets the home show a 3-card summary while /services shows all of them.
  const services = servicesSection.items.slice(0, limit);

  return (
    <section id="services" className="bg-surface-2 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={
              <>
                {t("titleLead")}
                <span className="block text-primary">
                  {t("titleAccent")}
                </span>
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
                className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-[0_18px_50px_-30px_rgba(15,23,34,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
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
                  <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-xl bg-primary text-white shadow-lg">
                    <Icon className="size-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-fg">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                    {t(`items.${service.key}.description`)}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    {tc("learnMore")}
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
}
