/* Locale-independent company facts, ordered by render top to bottom */
export const company = {
  /* navbar: brand badge, name, contact phone */
  logo: "/images/logo/logo.webp",
  name: "Roofpro",
  phone: "+123 456 7890",
  /* hero: availability badge city + social-proof rating count */
  city: "MIAMI, FL" /* hand-cased uppercase for the badge */,
  customersServed: 1500,
  /* marquee: years-in-business figure */
  yearsExperience: 25,
  /* about: stat figures */
  projectsCompleted: 1500,
  homesProtected: 1000,
  satisfaction: 98,
  /* why-choose: certified roofers stat figure */
  certifiedRoofers: 40,
  /* pitch stats + testimonials badge: Google rating score and review count */
  googleScore: 4.9,
  googleReviews: 820,
  /* footer brand: social profile URLs (placeholder until the real accounts exist) */
  facebookHref: "#",
  xHref: "#",
  instagramHref: "#",
  youtubeHref: "#",
  /* footer contact: address + linked phone + linked email */
  address: "1200 Biscayne Blvd, Miami, FL",
  phoneHref: "tel:+1234567890",
  email: "hello@roofpro.com",
  emailHref: "mailto:hello@roofpro.com",
  /* areas: physical branch offices in the Miami metro (name, street address, local phone; temporary placeholders) */
  /* address tokens tuned so the four read at an even length (~30-33 chars) like service/project cards */
  offices: [
    {
      key: "northMiami",
      name: "North Miami",
      address: "1250 NE 125th St, North Miami, FL",
      phone: "(305) 555 0142",
      phoneHref: "tel:+13055550142",
    },
    {
      key: "downtownMiami",
      name: "Downtown Miami",
      address: "100 NE 1st Ave, Miami, FL 33132",
      phone: "(305) 555 0168",
      phoneHref: "tel:+13055550168",
    },
    {
      key: "coralGables",
      name: "Coral Gables",
      address: "1200 Ponce de Leon Blvd, FL 33134",
      phone: "(305) 555 0173",
      phoneHref: "tel:+13055550173",
    },
    {
      key: "miamiBeach",
      name: "Miami Beach",
      address: "1688 Alton Rd, Miami Beach, FL",
      phone: "(305) 555 0129",
      phoneHref: "tel:+13055550129",
    },
  ],
  /* footer hours: opening times (a null value means closed) */
  weekdayHours: "8:00 AM – 7:00 PM",
  saturdayHours: "9:00 AM – 4:00 PM",
  sundayHours: null,
  /* floating contact: whatsapp deep link */
  whatsappHref: "https://wa.me/1234567890" /* placeholder number, digits only */,
};
