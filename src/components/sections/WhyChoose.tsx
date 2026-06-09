"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { features, whyStats } from "@/data/site";

export default function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Roofing You Can Rely
                <span className="block text-[var(--color-primary)]">
                  On Every Shingle Time
                </span>
              </>
            }
            description="With years of hands-on roofing experience and a team of licensed professionals, we bring proven, dependable workmanship to every project. When it comes to protecting your home or business, you deserve a roofing team you can count on."
          />

          <div className="mt-9 flex flex-wrap items-center gap-6">
            {whyStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-[var(--color-cream)] text-[var(--color-primary)]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <div className="text-xl font-extrabold text-[var(--color-ink)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--color-muted)]">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9">
            <Button href="#contact" variant="primary" withArrow>
              Learn More
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
                    : "border-[var(--color-line)] bg-[var(--color-cream)] hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl transition-colors ${
                    i === 1
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-white text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white"
                  }`}
                >
                  <Icon className="size-7" />
                </span>
                <h3
                  className={`mt-6 text-lg font-bold ${
                    i === 1 ? "text-white" : "text-[var(--color-ink)]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 1 ? "text-white/70" : "text-[var(--color-muted)]"
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
