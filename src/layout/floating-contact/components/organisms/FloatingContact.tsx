import { getTranslations } from "next-intl/server";
import { FloatingActions } from "@/layout/floating-contact/components/molecules/FloatingActions";
import { layoutData } from "@/data/global/layout";

const { name, actions } = layoutData.floatingContact;

export const FloatingContact = async () => {
  const t = await getTranslations("floating-contact");

  /* whatsapp appends the localized message to its href; label by key */
  const message = t("whatsappMessage", { name });
  const actionItems = actions.map((action) => ({
    key: action.key,
    href: action.key === "whatsapp" ? `${action.href}?text=${encodeURIComponent(message)}` : action.href,
    label: t(action.key),
    external: action.external,
  }));

  return (
    <div className="fixed right-5 bottom-5 z-50 animate-float-y">
      <FloatingActions actions={actionItems} />
    </div>
  );
};
