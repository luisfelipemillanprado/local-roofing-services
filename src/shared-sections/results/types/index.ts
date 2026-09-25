/* material a finished job is filed under; mirrors the shop category keys */
type ResultCategory =
  | "shingles"
  | "metal"
  | "underlayment"
  | "flashing"
  | "accessories"
  | "tools"
  | "supplies";

export interface ResultsProps {
  category: ResultCategory; /* narrows the set to the jobs that show this material */
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
}
