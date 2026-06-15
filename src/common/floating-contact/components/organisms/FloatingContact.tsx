import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";

/** WhatsApp brand glyph (lucide no longer ships brand logos). */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

type Action = {
  href: string;
  label: string;
  icon: React.ReactNode;
  className: string;
  external?: boolean;
};

export async function FloatingContact() {
  const t = await getTranslations("floating-contact");

  // Prefilled, roofing-themed WhatsApp message in the active locale.
  const whatsappText = t("whatsappMessage", { name: company.name });
  const whatsappHref = `${company.whatsappHref}?text=${encodeURIComponent(whatsappText)}`;

  const actions: Action[] = [
    {
      href: whatsappHref,
      label: t("whatsapp"),
      icon: <WhatsAppIcon className="size-7" />,
      className:
        "bg-[#25D366] shadow-[0_0.75rem_1.875rem_-0.5rem_rgba(37,211,102,0.6)]",
      external: true,
    },
    {
      href: company.phoneHref,
      label: t("call"),
      icon: <Phone className="size-6" />,
      className:
        "bg-primary shadow-[0_0.75rem_1.875rem_-0.5rem_rgba(229,171,96,0.6)]",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {actions.map((action) => (
        <a
          key={action.href}
          href={action.href}
          aria-label={action.label}
          {...(action.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="group flex items-center"
        >
          <span className="pointer-events-none mr-3 translate-x-2 rounded-full bg-surface px-3 py-1.5 text-sm font-semibold text-fg opacity-0 shadow-soft transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            {action.label}
          </span>
          <span
            className={`grid size-14 place-items-center rounded-full text-white transition-transform duration-300 group-hover:scale-105 ${action.className}`}
          >
            {action.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
