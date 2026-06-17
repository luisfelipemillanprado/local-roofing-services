import type { ComponentType, SVGProps } from "react";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";
import { layoutData } from "@/data/global/layout";
import { PulseRing } from "@/common/animations/components/PulseRing";
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

export const FloatingContact = async () => {
  const t = await getTranslations("floating-contact");

  // WhatsApp carries a localized prefilled message; the phone is a plain tel link.
  const message = t("whatsappMessage", { name: company.name });
  const hrefs: Record<FloatingActionKey, string> = {
    whatsapp: `${company.whatsappHref}?text=${encodeURIComponent(message)}`,
    call: company.phoneHref,
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex animate-float-y flex-col gap-4">
      {actions.map(({ key, external }) => {
        const Icon = ICONS[key];
        const color = key === "whatsapp" ? "bg-whatsapp" : "bg-primary";
        return (
          <PulseRing key={key} color={color}>
            <a
              href={hrefs[key]}
              aria-label={t(key)}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={clsx(
                "relative grid size-14 place-items-center rounded-2xl text-white shadow-sm shadow-ink/40",
                color,
              )}
            >
              <Icon className="size-7" aria-hidden />
            </a>
          </PulseRing>
        );
      })}
    </div>
  );
}
