import { company } from "@/data/site";

/* "About" section data; image, CTA, years, call, points + stats, text resolved by key. */
export const aboutData = {
  name: company.name,
  image: "/images/boss/boss.webp",
  ctaHref: {
    learnMore: { key: "action.learnMore", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
  years: { key: "experience", value: `${company.yearsExperience}+` },
  call: { key: "callAnytime", number: company.phone },
  points: [{ key: "residentialCommercial" }, { key: "warranties" }, { key: "pricing" }],
  stats: [
    { key: "projects", value: "1500+" },
    { key: "customers", value: "1000+" },
    { key: "satisfaction", value: "98%" },
  ],
} as const;
