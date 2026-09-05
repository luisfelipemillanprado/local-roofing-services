/* Faq section: per-variant items, text by full key; header + cta shared */
export const faqData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  services: {
    items: [
      { key: "services.items.estimate" },
      { key: "services.items.materials" },
      { key: "services.items.assessment" },
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
      { key: "projects.items.materials" },
      { key: "projects.items.matching" },
      { key: "projects.items.florida" },
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
  /* per-service detail variants; selected by the service slug (services.ts order) */
  repair: {
    items: [
      { key: "repair.items.assessment" },
      { key: "repair.items.damage" },
      { key: "repair.items.leak" },
      { key: "repair.items.duration" },
      { key: "repair.items.extend" },
      { key: "repair.items.matching" },
      { key: "repair.items.warranty" },
    ],
  },
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
  storm: {
    items: [
      { key: "storm.items.signs" },
      { key: "storm.items.inspect" },
      { key: "storm.items.insurance" },
      { key: "storm.items.leak" },
      { key: "storm.items.types" },
      { key: "storm.items.urgency" },
      { key: "storm.items.matching" },
    ],
  },
  inspections: {
    items: [
      { key: "inspections.items.includes" },
      { key: "inspections.items.frequency" },
      { key: "inspections.items.hidden" },
      { key: "inspections.items.report" },
      { key: "inspections.items.insurance" },
      { key: "inspections.items.buying" },
      { key: "inspections.items.recommendations" },
    ],
  },
  gutters: {
    items: [
      { key: "gutters.items.replace" },
      { key: "gutters.items.flashing" },
      { key: "gutters.items.damage" },
      { key: "gutters.items.areas" },
      { key: "gutters.items.combined" },
      { key: "gutters.items.drainage" },
      { key: "gutters.items.lifespan" },
    ],
  },
  commercial: {
    items: [
      { key: "commercial.items.systems" },
      { key: "commercial.items.disruption" },
      { key: "commercial.items.assessment" },
      { key: "commercial.items.duration" },
      { key: "commercial.items.managers" },
      { key: "commercial.items.inspection" },
      { key: "commercial.items.warranty" },
    ],
  },
  residential: {
    items: [
      { key: "residential.items.assessment" },
      { key: "residential.items.materials" },
      { key: "residential.items.permits" },
      { key: "residential.items.duration" },
      { key: "residential.items.weather" },
      { key: "residential.items.property" },
      { key: "residential.items.warranty" },
    ],
  },
  metal: {
    items: [
      { key: "metal.items.suitable" },
      { key: "metal.items.lifespan" },
      { key: "metal.items.efficiency" },
      { key: "metal.items.overlay" },
      { key: "metal.items.options" },
      { key: "metal.items.noise" },
      { key: "metal.items.warranty" },
    ],
  },
  tile: {
    items: [
      { key: "tile.items.materials" },
      { key: "tile.items.hurricane" },
      { key: "tile.items.lifespan" },
      { key: "tile.items.repair" },
      { key: "tile.items.underlayment" },
      { key: "tile.items.value" },
      { key: "tile.items.warranty" },
    ],
  },
  flat: {
    items: [
      { key: "flat.items.buildings" },
      { key: "flat.items.drainage" },
      { key: "flat.items.durability" },
      { key: "flat.items.lifespan" },
      { key: "flat.items.repair" },
      { key: "flat.items.inspection" },
      { key: "flat.items.warranty" },
    ],
  },
  skylights: {
    items: [
      { key: "skylights.items.existing" },
      { key: "skylights.items.leak" },
      { key: "skylights.items.types" },
      { key: "skylights.items.duration" },
      { key: "skylights.items.efficiency" },
      { key: "skylights.items.replace" },
      { key: "skylights.items.warranty" },
    ],
  },
  solar: {
    items: [
      { key: "solar.items.replace" },
      { key: "solar.items.compatibility" },
      { key: "solar.items.readiness" },
      { key: "solar.items.damage" },
      { key: "solar.items.repair" },
      { key: "solar.items.coordination" },
      { key: "solar.items.warranty" },
    ],
  },
} as const;
