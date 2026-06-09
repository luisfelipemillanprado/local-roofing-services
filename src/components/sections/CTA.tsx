"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative isolate overflow-hidden rounded-[2rem] bg-[var(--color-ink)] px-6 py-16 sm:px-12 lg:px-16"
        >
          <div className="absolute inset-0 -z-10 opacity-30">
            <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/90 to-[var(--color-primary)]/40" />

          <div className="max-w-2xl">
            <motion.span
              variants={fadeUp}
              className="eyebrow text-[var(--color-primary-light)] before:bg-[var(--color-primary-light)]"
            >
              Get Started Today
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl"
            >
              Secure Your Home With
              <span className="block">A Strong Roof — Act Now</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-white/70">
              Get a free, no-obligation inspection and quote. Drop your email and our team
              will reach out within one business day.
            </motion.p>

            <motion.form
              variants={fadeUp}
              onSubmit={onSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full flex-1 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder:text-white/50 backdrop-blur focus:border-[var(--color-primary-light)] focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary-dark)]"
              >
                {sent ? (
                  <>
                    Request Sent <Check className="size-4" />
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
