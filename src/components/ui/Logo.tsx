import { company } from "@/data/site";
import { Link } from "@/i18n/navigation";

export default function Logo({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight"
      aria-label={`${company.name} home`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-[var(--color-primary)] text-white shadow-[0_8px_20px_-8px_rgba(232,57,43,0.8)]">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            d="M3 11.5 12 4l9 7.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 10.5V20h13v-9.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={theme === "dark" ? "text-white" : "text-[var(--fg)]"}>
        {company.name}
      </span>
    </Link>
  );
}
