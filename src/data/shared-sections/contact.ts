/* Contact section: banner image + email form; text by key */
export const contactData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* submit button + status labels, no navigating href */
  cta: {
    key: "action.submit",
    sendingKey: "action.sending",
    sentKey: "action.sent",
    errorKey: "action.error",
  },
  image: "/images/contact/contact.webp",
  /* email input: sr label + placeholder text by key */
  input: { label: "emailLabel", placeholder: "emailPlaceholder" },
} as const;
