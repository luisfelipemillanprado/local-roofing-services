/* Service Areas section: Florida cities we cover; place labels are literal data (proper nouns) */
export const serviceAreasData = {
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* 21 cities (7 rows x 3 cols), grouped by county in order */
  areas: [
    { key: "miami", name: "Miami", county: "Miami-Dade County" },
    { key: "miamiBeach", name: "Miami Beach", county: "Miami-Dade County" },
    { key: "hialeah", name: "Hialeah", county: "Miami-Dade County" },
    { key: "coralGables", name: "Coral Gables", county: "Miami-Dade County" },
    { key: "homestead", name: "Homestead", county: "Miami-Dade County" },
    { key: "doral", name: "Doral", county: "Miami-Dade County" },
    { key: "aventura", name: "Aventura", county: "Miami-Dade County" },
    { key: "fortLauderdale", name: "Fort Lauderdale", county: "Broward County" },
    { key: "hollywood", name: "Hollywood", county: "Broward County" },
    { key: "pembrokePines", name: "Pembroke Pines", county: "Broward County" },
    { key: "coralSprings", name: "Coral Springs", county: "Broward County" },
    { key: "pompanoBeach", name: "Pompano Beach", county: "Broward County" },
    { key: "davie", name: "Davie", county: "Broward County" },
    { key: "plantation", name: "Plantation", county: "Broward County" },
    { key: "westPalmBeach", name: "West Palm Beach", county: "Palm Beach County" },
    { key: "bocaRaton", name: "Boca Raton", county: "Palm Beach County" },
    { key: "boyntonBeach", name: "Boynton Beach", county: "Palm Beach County" },
    { key: "delrayBeach", name: "Delray Beach", county: "Palm Beach County" },
    { key: "jupiter", name: "Jupiter", county: "Palm Beach County" },
    { key: "wellington", name: "Wellington", county: "Palm Beach County" },
    { key: "palmBeachGardens", name: "Palm Beach Gardens", county: "Palm Beach County" },
  ],
} as const;
