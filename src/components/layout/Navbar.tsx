"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, company } from "@/data/site";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_10px_40px_-24px_rgba(15,23,34,0.45)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[var(--color-cream)] text-[var(--color-primary)]">
              <Phone className="size-4" />
            </span>
            {company.phone}
          </a>
          <Button href="#contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-xl bg-[var(--color-ink)] text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="container-x pb-6">
              <div className="rounded-2xl border border-[var(--color-line)] bg-white p-4 shadow-[var(--shadow-soft)]">
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-base font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 flex flex-col gap-3 border-t border-[var(--color-line)] pt-4">
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-2 px-1 text-sm font-semibold text-[var(--color-ink)]"
                  >
                    <Phone className="size-4 text-[var(--color-primary)]" />
                    {company.phone}
                  </a>
                  <Button href="#contact" variant="primary" className="w-full">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
