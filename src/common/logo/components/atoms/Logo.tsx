import { company } from "@/data/site";
import { Link } from "@/i18n/navigation";

/** Wordmark inherits `currentColor`, so the parent (navbar / footer) drives its
 *  color and it stays readable on any themed surface. */
export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight"
      aria-label={`${company.name} home`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-white shadow-[0_0.5rem_1.25rem_-0.5rem_rgba(217,166,72,0.8)]">
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
      <span>{company.name}</span>
    </Link>
  );
}
