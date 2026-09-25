/* Results section: finished jobs filed by the material they show off, text by key.
   Shares the project photography; categories mirror the shop category keys. */
export const resultsData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* single CTA: the contact form, same wording as every other section */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* image viewer controls: labels by key */
  viewer: { close: "action.close", previous: "action.previous", next: "action.next" },
  /* a job fits several materials; each category resolves to exactly six tiles */
  items: [
    {
      key: "silverSeam",
      image: "/images/projects/project-1.webp",
      categories: ["accessories", "tools"],
    },
    {
      key: "slateConcrete",
      image: "/images/projects/project-9.webp",
      categories: ["shingles", "underlayment", "tools"],
    },
    {
      key: "greyAsphalt",
      image: "/images/projects/project-2.webp",
      categories: ["shingles", "underlayment", "tools"],
    },
    {
      key: "metalMansard",
      image: "/images/projects/project-20.webp",
      categories: ["flashing", "tools", "supplies"],
    },
    {
      key: "solarPanels",
      image: "/images/projects/project-18.webp",
      categories: ["flashing", "accessories"],
    },
    {
      key: "flatSkylights",
      image: "/images/projects/project-11.webp",
      categories: ["flashing", "accessories"],
    },
    { key: "bronzeSeam", image: "/images/projects/project-3.webp", categories: ["metal"] },
    { key: "terracottaSeam", image: "/images/projects/project-5.webp", categories: ["metal"] },
    { key: "brightSeam", image: "/images/projects/project-6.webp", categories: ["metal"] },
    { key: "charcoalSeam", image: "/images/projects/project-8.webp", categories: ["metal"] },
    {
      key: "blackStoneTile",
      image: "/images/projects/project-7.webp",
      categories: ["underlayment", "supplies"],
    },
    { key: "navySeam", image: "/images/projects/project-13.webp", categories: ["metal"] },
    { key: "graphiteSeam", image: "/images/projects/project-14.webp", categories: ["metal"] },
    {
      key: "maroonStoneTile",
      image: "/images/projects/project-15.webp",
      categories: ["tools", "supplies"],
    },
    { key: "greyStoneTile", image: "/images/projects/project-16.webp", categories: ["flashing"] },
    {
      key: "pewterSeam",
      image: "/images/projects/project-17.webp",
      categories: ["tools", "supplies"],
    },
    {
      key: "clayBarrel",
      image: "/images/projects/project-4.webp",
      categories: ["shingles", "underlayment"],
    },
    {
      key: "coralBarrel",
      image: "/images/projects/project-12.webp",
      categories: ["shingles", "underlayment"],
    },
    {
      key: "agedAsphalt",
      image: "/images/projects/project-21.webp",
      categories: ["shingles", "underlayment", "accessories", "supplies"],
    },
    {
      key: "shingleSkylight",
      image: "/images/projects/project-10.webp",
      categories: ["shingles", "flashing", "accessories"],
    },
    {
      key: "roofLantern",
      image: "/images/projects/project-19.webp",
      categories: ["flashing", "accessories", "supplies"],
    },
  ],
} as const;
