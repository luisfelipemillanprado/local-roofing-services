import type { ComponentType, SVGProps } from "react";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";
import { layoutData } from "@/data/global/layout";
import type { FloatingActionKey } from "@/common/floating-contact/types";

// The data holds a key string, so the icon component is resolved here.
const ICONS: Record<
  FloatingActionKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  whatsapp: SiWhatsapp,
  call: Phone,
};

const { actions } = layoutData.floatingContact;

export async function FloatingContact() {
  const t = await getTranslations("floating-contact");

  // WhatsApp carries a localized prefilled message; the phone is a plain tel link.
  const message = t("whatsappMessage", { name: company.name });
  const hrefs: Record<FloatingActionKey, string> = {
    whatsapp: `${company.whatsappHref}?text=${encodeURIComponent(message)}`,
    call: company.phoneHref,
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {actions.map(({ key, external }) => {
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={hrefs[key]}
            aria-label={t(key)}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={clsx(
              "grid size-14 place-items-center rounded-full text-white shadow-md shadow-ink/40",
              key === "whatsapp" ? "bg-whatsapp" : "bg-primary",
            )}
          >
            <Icon className="size-6" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
