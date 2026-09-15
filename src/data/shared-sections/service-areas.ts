/* Service Areas section: branch office photos + the interactive Miami map */
export const serviceAreasData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* image viewer controls: labels by key */
  viewer: { close: "action.close", previous: "action.previous", next: "action.next" },
  /* office card photos linked to company.offices by key */
  officeImages: [
    { key: "northMiami", image: "/images/offices/office-1.webp" },
    { key: "downtownMiami", image: "/images/offices/office-2.webp" },
    { key: "coralGables", image: "/images/offices/office-3.webp" },
    { key: "miamiBeach", image: "/images/offices/office-4.webp" },
    { key: "hialeah", image: "/images/offices/office-5.webp" },
    { key: "westchester", image: "/images/offices/office-6.webp" },
  ],
  /* offices map: MapLibre style url (swap provider by changing it) + Miami-only geography */
  map: {
    styleUrl: "https://tiles.openfreemap.org/styles/liberty",
    /* map region + control labels: by key */
    labels: {
      region: "mapAlt",
      zoomIn: "map.zoomIn",
      zoomOut: "map.zoomOut",
      closePopup: "map.closePopup",
      toggleAttribution: "map.toggleAttribution",
    },
    /* opening frame, and the zoom floor: the area of the previous static map (North Miami to Coral Gables, the bay, Miami Beach) */
    view: { west: -80.345, south: 25.715, east: -80.105, north: 25.9 },
    /* drag limit once zoomed in: room to pan inside Miami-Dade, north kept short of Broward */
    limit: { west: -80.6, south: 25.6, east: -79.88, north: 25.945 },
  },
} as const;
