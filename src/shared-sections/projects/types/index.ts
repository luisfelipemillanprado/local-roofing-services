export interface ProjectsProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
  offset?: number; /* skip items so about can show a different six than home */
}
