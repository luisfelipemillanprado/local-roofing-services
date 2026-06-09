"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { coupons } from "@/data/site";

export default function Coupons() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 22px)",
        }}
      />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Coupons"
            theme="dark"
            title={
              <>
                Save Big On Your
                <span className="block text-[var(--color-primary-light)]">
                  Next Roofing Project
                </span>
              </>
            }
          />
          <Button href="#contact" variant="primary" withArrow className="shrink-0">
            Explore Coupons
          </Button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {coupons.map((coupon) => (
            <motion.div
              key={coupon.amount}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] p-7 transition-transform duration-300 hover:-translate-y-1.5 ${
                coupon.highlighted
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-[var(--color-ink)]"
              }`}
            >
              {/* Ticket notches */}
              <span className="absolute -left-3 top-1/2 size-6 -translate-y-1/2 rounded-full bg-[var(--color-ink)]" />
              <span className="absolute -right-3 top-1/2 size-6 -translate-y-1/2 rounded-full bg-[var(--color-ink)]" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">
                  {coupon.title}
                </span>
                <Scissors className="size-5 opacity-60" />
              </div>

              <div
                className={`my-6 rounded-xl border-2 border-dashed py-5 text-center text-3xl font-extrabold ${
                  coupon.highlighted
                    ? "border-white/50"
                    : "border-[var(--color-primary)]/40 text-[var(--color-primary)]"
                }`}
              >
                {coupon.amount}
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  coupon.highlighted ? "text-white/80" : "text-[var(--color-muted)]"
                }`}
              >
                {coupon.description}
              </p>

              <Button
                href="#contact"
                variant={coupon.highlighted ? "ghost" : "dark"}
                className="mt-6 w-full"
              >
                Claim Offer
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
