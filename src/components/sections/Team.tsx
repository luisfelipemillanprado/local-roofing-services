"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Socials from "@/components/ui/Socials";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { team } from "@/data/site";

export default function Team() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Team"
            title={
              <>
                Our Skilled Team Of
                <span className="block text-[var(--color-primary)]">
                  Roofing Professionals
                </span>
              </>
            }
          />
          <Button href="#contact" variant="dark" withArrow className="shrink-0">
            Explore Our Team
          </Button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-cream)]"
            >
              <div className="relative aspect-[4/4.6] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent" />

                {/* Socials reveal */}
                <div className="absolute right-4 top-4 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <Socials theme="dark" className="flex-col" />
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{member.role}</p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-[var(--color-primary)] text-white transition-transform duration-300 group-hover:rotate-90">
                  <Plus className="size-5" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
