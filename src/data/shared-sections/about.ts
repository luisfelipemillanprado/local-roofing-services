import { company } from "@/data/site";

/* About section data; firm-level, text resolved by key */
export const aboutData = {
  /* video: ambient loop + poster still + its alt key */
  video: { src: "/videos/video1/video1.webm", poster: "/videos/video1/poster.webp", altKey: "videoAlt" },
  /* badge + contact card: value from company, label by key */
  years: { key: "experience", value: `${company.yearsExperience}+` },
  call: { key: "callAnytime", number: company.phone },
  /* company name — ICU arg for videoAlt + description */
  name: company.name,
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  points: [{ key: "residentialCommercial" }, { key: "certified" }, { key: "materials" }],
  stats: [
    { key: "projects", value: `${company.projectsCompleted}+` },
    { key: "homes", value: `${company.homesProtected}+` },
    { key: "satisfaction", value: `${company.satisfaction}%` },
  ],
  ctaHref: {
    learnMore: { key: "action.viewDetails", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
} as const;
