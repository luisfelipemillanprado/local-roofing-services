import { company } from "@/data/site";

/* "About" section data; image, CTA, years, call + stats, text resolved by key. */
export const aboutSection = {
  name: company.name,
  image: "/images/boss/boss.webp",
  cta: { key: "learnMore", href: "/services" },
  years: { key: "experience", value: "25+" },
  call: { key: "callAnytime", number: company.phone },
  stats: [
    { key: "projects", value: "1500+" },
    { key: "customers", value: "800+" },
    { key: "satisfaction", value: "98%" },
  ],
} as const;
