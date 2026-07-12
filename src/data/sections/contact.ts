/* Contact section: banner background image */
export const contactData = {
  image: "/images/contact/contact.webp",
  /* submit button: no href, the form does not navigate */
  cta: { key: "action.submit" },
  /* email input: sr label + placeholder text by key */
  input: { labelKey: "emailLabel", placeholderKey: "emailPlaceholder" },
} as const;
