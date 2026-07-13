/* semantic keys for the floating actions (i18n label + icon) */
export type FloatingActionKey = "whatsapp" | "call";

/* static floating action from the data layer (destination + behavior, no text) */
export type FloatingActionData = {
  key: FloatingActionKey;
  href: string;
  external?: boolean;
};

/* resolved floating action for the list */
interface FloatingActionItem {
  key: FloatingActionKey;
  href: string;
  label: string;
  external?: boolean;
}

export interface FloatingActionsProps {
  actions: FloatingActionItem[];
}
