"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { useContent } from "@/i18n/provider";

export default function WhyChoose() {
  const { features, whyStats, ui } = useContent();

  return (
    <section className="bg-[var(--page-bg)] py-20 lg:py-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={ui.whyEyebrow}
            title={
              <>
                {ui.whyTitleLead}
                <span className="block text-[var(--color-primary)]">
                  {ui.whyTitleAccent}
                </span>
              </>
            }
            description={ui.whyDescription}
          />

          <div className="mt-9 flex flex-wrap items-center gap-6">
            {whyStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-[var(--surface-2)] text-[var(--color-primary)]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <div className="text-xl font-extrabold text-[var(--fg)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--fg-muted)]">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9">
            <Button href="#contact" variant="primary" withArrow>
              {ui.learnMore}
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className={`group rounded-[var(--radius-card)] border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 1
                    ? "border-transparent bg-[var(--color-ink)] text-white shadow-[var(--shadow-card)]"
                    : "border-[var(--border)] bg-[var(--surface-2)] hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl transition-colors ${
                    i === 1
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--surface)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white"
                  }`}
                >
                  <Icon className="size-7" />
                </span>
                <h3
                  className={`mt-6 text-lg font-bold ${
                    i === 1 ? "text-white" : "text-[var(--fg)]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 1 ? "text-white/70" : "text-[var(--fg-muted)]"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
