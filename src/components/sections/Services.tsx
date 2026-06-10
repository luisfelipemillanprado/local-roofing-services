"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { useTranslations } from "next-intl";
import { serviceMeta } from "@/config/content";

export default function Services() {
  const t = useTranslations("Services");
  const tc = useTranslations("Common");
  const items = t.raw("items") as { title: string; description: string }[];
  const services = items.map((item, i) => ({ ...item, ...serviceMeta[i] }));

  return (
    <section id="services" className="bg-[var(--surface-2)] py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={
              <>
                {t("titleLead")}
                <span className="block text-[var(--color-primary)]">
                  {t("titleAccent")}
                </span>
              </>
            }
          />
          <Button href="#contact" variant="primary" withArrow className="shrink-0">
            {t("exploreAll")}
          </Button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_50px_-30px_rgba(15,23,34,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-xl bg-[var(--color-primary)] text-white shadow-lg">
                    <Icon className="size-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-[var(--fg)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {service.description}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]"
                  >
                    {tc("learnMore")}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
