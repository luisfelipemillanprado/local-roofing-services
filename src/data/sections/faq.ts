/* Faq section: per-variant items, text by full key; header + cta shared */
export const faqData = {
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  services: {
    items: [
      { key: "services.items.assessment" },
      { key: "services.items.insurance" },
      { key: "services.items.warranty" },
      { key: "services.items.presence" },
      { key: "services.items.protection" },
      { key: "services.items.weather" },
      { key: "services.items.scheduling" },
    ],
  },
  projects: {
    items: [
      { key: "projects.items.similar" },
      { key: "projects.items.duration" },
      { key: "projects.items.occupied" },
      { key: "projects.items.permits" },
      { key: "projects.items.matching" },
      { key: "projects.items.hidden" },
      { key: "projects.items.start" },
    ],
  },
  about: {
    items: [
      { key: "about.items.licensed" },
      { key: "about.items.hurricanes" },
      { key: "about.items.insurance" },
      { key: "about.items.permits" },
      { key: "about.items.warranty" },
      { key: "about.items.replacement" },
      { key: "about.items.signs" },
    ],
  },
  /* per-service detail variants; selected by the service slug */
  replacement: {
    items: [
      { key: "replacement.items.duration" },
      { key: "replacement.items.presence" },
      { key: "replacement.items.cost" },
      { key: "replacement.items.warranty" },
      { key: "replacement.items.leaks" },
      { key: "replacement.items.rain" },
      { key: "replacement.items.permit" },
    ],
  },
  shingle: {
    items: [
      { key: "shingle.items.lifespan" },
      { key: "shingle.items.wind" },
      { key: "shingle.items.colors" },
      { key: "shingle.items.cost" },
      { key: "shingle.items.warranty" },
      { key: "shingle.items.overlay" },
    ],
  },
  metal: {
    items: [
      { key: "metal.items.lifespan" },
      { key: "metal.items.noise" },
      { key: "metal.items.heat" },
      { key: "metal.items.cost" },
      { key: "metal.items.storms" },
      { key: "metal.items.rust" },
    ],
  },
  storm: {
    items: [
      { key: "storm.items.inspection" },
      { key: "storm.items.claim" },
      { key: "storm.items.emergency" },
      { key: "storm.items.deductible" },
      { key: "storm.items.timeline" },
      { key: "storm.items.denied" },
    ],
  },
  commercial: {
    items: [
      { key: "commercial.items.systems" },
      { key: "commercial.items.disruption" },
      { key: "commercial.items.ponding" },
      { key: "commercial.items.maintenance" },
      { key: "commercial.items.warranty" },
      { key: "commercial.items.cost" },
    ],
  },
  maintenance: {
    items: [
      { key: "maintenance.items.frequency" },
      { key: "maintenance.items.plan" },
      { key: "maintenance.items.warranty" },
      { key: "maintenance.items.cost" },
      { key: "maintenance.items.worth" },
      { key: "maintenance.items.repairs" },
    ],
  },
  gutters: {
    items: [
      { key: "gutters.items.seamless" },
      { key: "gutters.items.flashing" },
      { key: "gutters.items.clogs" },
      { key: "gutters.items.foundation" },
      { key: "gutters.items.cost" },
      { key: "gutters.items.warranty" },
    ],
  },
  skylights: {
    items: [
      { key: "skylights.items.leak" },
      { key: "skylights.items.rooms" },
      { key: "skylights.items.heat" },
      { key: "skylights.items.existing" },
      { key: "skylights.items.cost" },
      { key: "skylights.items.warranty" },
    ],
  },
  solar: {
    items: [
      { key: "solar.items.roof" },
      { key: "solar.items.leaks" },
      { key: "solar.items.new" },
      { key: "solar.items.savings" },
      { key: "solar.items.output" },
      { key: "solar.items.warranty" },
    ],
  },
} as const;
