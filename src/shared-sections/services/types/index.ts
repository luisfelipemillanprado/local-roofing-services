export interface ServicesProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
  limit?: number;
}
