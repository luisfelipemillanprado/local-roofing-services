"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { testimonials } from "@/data/site";

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.5 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.4 7.4 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.2 0 10 0 12s.5 3.8 1.4 5.5l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.6 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8Z"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-cream)] py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                Client Stories From
                <span className="block text-[var(--color-primary)]">
                  The Roofs We&apos;ve Built
                </span>
              </>
            }
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3">
              <GoogleMark />
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold">
                  4.9
                  <span className="flex text-[var(--color-primary)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-muted)]">820+ reviews</p>
              </div>
            </div>
            <Button href="#contact" variant="dark" className="hidden sm:inline-flex">
              View All
            </Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-7 shadow-[0_18px_50px_-34px_rgba(15,23,34,0.45)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex text-[var(--color-primary)]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <Quote className="size-8 text-[var(--color-cream)]" fill="currentColor" />
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-[var(--color-ink)]/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--color-line)] pt-5">
                <span className="relative size-11 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-[var(--color-ink)]">{t.name}</div>
                  <div className="text-xs text-[var(--color-muted)]">{t.location}</div>
                </div>
                <GoogleMark />
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
