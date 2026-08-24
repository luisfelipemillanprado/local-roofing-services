/* Contact section: banner image + email form; text by key */
export const contactData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* submit button: idle + sent labels, no navigating href */
  cta: { key: "action.submit", sentKey: "action.sent" },
  image: "/images/contact/contact.webp",
  /* email input: sr label + placeholder text by key */
  input: { label: "emailLabel", placeholder: "emailPlaceholder" },
} as const;
