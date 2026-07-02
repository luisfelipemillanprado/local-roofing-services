import { company } from "@/data/site";

/* "About" section data; image, CTA, years, call, points + stats, text resolved by key. */
export const aboutSection = {
  name: company.name,
  image: "/images/boss/boss.webp",
  ctaHref: { key: "action", href: "/services" },
  years: { key: "experience", value: `${company.yearsExperience}+` },
  call: { key: "callAnytime", number: company.phone },
  points: [{ key: "residentialCommercial" }, { key: "warranties" }, { key: "pricing" }],
  stats: [
    { key: "projects", value: "1500+" },
    { key: "customers", value: "800+" },
    { key: "satisfaction", value: "98%" },
  ],
} as const;
