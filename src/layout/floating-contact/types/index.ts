/** Shared types for the floating-contact component. */

/** Semantic keys for the floating actions (used for the i18n label). */
export type FloatingActionKey = "whatsapp" | "call";

/** Static floating action from the data layer (destination + behavior, no text). */
export type FloatingActionData = {
  key: FloatingActionKey;
  href: string;
  external?: boolean;
};
