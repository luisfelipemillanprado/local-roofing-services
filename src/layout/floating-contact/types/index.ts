/** Shared types for the floating-contact component. */

/** Semantic keys for the floating actions (used for the i18n label). */
export type FloatingActionKey = "whatsapp" | "call";

/** Static floating action from the data layer (behavior only, no text). */
export type FloatingActionData = {
  key: FloatingActionKey;
  external?: boolean;
};
