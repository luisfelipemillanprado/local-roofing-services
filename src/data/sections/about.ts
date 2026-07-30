import { company } from "@/data/site";

/* "About" section data; firm-level, text resolved by key. */
export const aboutData = {
  name: company.name,
  image: "/images/boss/boss.webp",
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  ctaHref: {
    learnMore: { key: "action.viewDetails", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* badge + contact card: value from company, label by key */
  years: { key: "experience", value: `${company.yearsExperience}+` },
  call: { key: "callAnytime", number: company.phone },
  points: [{ key: "residentialCommercial" }, { key: "warranties" }, { key: "pricing" }],
  stats: [
    { key: "projects", value: "1500+" },
    { key: "customers", value: "1000+" },
    { key: "satisfaction", value: "98%" },
  ],
} as const;
