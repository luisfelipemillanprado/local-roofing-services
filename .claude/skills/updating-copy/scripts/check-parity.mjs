/* compare EN/ES key parity of the generated messages; run `pnpm i18n:build` first */
import { readFileSync } from "node:fs";

const flatten = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([key, value]) =>
    value && typeof value === "object" && !Array.isArray(value)
      ? flatten(value, `${prefix}${key}.`)
      : [`${prefix}${key}`],
  );

const load = (locale) => new Set(flatten(JSON.parse(readFileSync(`messages/${locale}.json`, "utf8"))));

const en = load("en");
const es = load("es");
const missingInEs = [...en].filter((key) => !es.has(key));
const missingInEn = [...es].filter((key) => !en.has(key));

if (missingInEs.length > 0 || missingInEn.length > 0) {
  for (const key of missingInEs) console.error(`missing in es: ${key}`);
  for (const key of missingInEn) console.error(`missing in en: ${key}`);
  process.exit(1);
}

console.log(`parity OK (${en.size} keys per locale)`);
