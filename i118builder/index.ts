import {
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  watch,
  writeFileSync,
} from "fs";
import { basename, dirname, join, relative, sep } from "path";

const BUILDER_MESSAGES_DIR = join(import.meta.dirname, "messages");
const OUTPUT_DIR = join(import.meta.dirname, "..", "messages");
const isWatch = process.argv.includes("--watch");

type JsonObject = { [key: string]: unknown };

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge(target: JsonObject, source: JsonObject): JsonObject {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (isJsonObject(result[key]) && isJsonObject(source[key])) {
      result[key] = deepMerge(
        result[key] as JsonObject,
        source[key] as JsonObject,
      );
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

function collectJsonFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...collectJsonFiles(fullPath));
    } else if (entry.endsWith(".json")) {
      files.push(fullPath);
    }
  }
  return files;
}

function getRouteSegments(filePath: string): string[] {
  const relativeDir = relative(BUILDER_MESSAGES_DIR, dirname(filePath));

  if (!relativeDir || relativeDir === ".") {
    return [];
  }

  return relativeDir
    .split(sep)
    .filter(Boolean)
    .filter((segment) => !(segment.startsWith("(") && segment.endsWith(")")));
}

function buildNestedObject(
  routeSegments: string[],
  content: JsonObject,
): JsonObject {
  return routeSegments.reduceRight<JsonObject>(
    (accumulator, segment) => ({
      [segment]: accumulator,
    }),
    content,
  );
}

function build() {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonFiles = collectJsonFiles(BUILDER_MESSAGES_DIR);

  const localeMap = new Map<string, JsonObject>();

  for (const filePath of jsonFiles) {
    const locale = basename(filePath, ".json");
    const routeSegments = getRouteSegments(filePath);
    let content: JsonObject;

    try {
      const parsedContent = JSON.parse(readFileSync(filePath, "utf-8")) as unknown;

      if (!isJsonObject(parsedContent)) {
        const relativePath = relative(BUILDER_MESSAGES_DIR, filePath);
        console.error(
          `[i18n-build] ✘ JSON root must be an object in ${relativePath} — skipping build`,
        );
        return;
      }

      content = parsedContent;
    } catch {
      const relativePath = relative(BUILDER_MESSAGES_DIR, filePath);
      console.error(
        `[i18n-build] ✘ JSON parse error in ${relativePath} — skipping build`,
      );
      return;
    }

    const nestedContent = buildNestedObject(routeSegments, content);

    if (localeMap.has(locale)) {
      localeMap.set(locale, deepMerge(localeMap.get(locale)!, nestedContent));
    } else {
      localeMap.set(locale, nestedContent);
    }
  }

  for (const [locale, messages] of localeMap) {
    const outputPath = join(OUTPUT_DIR, `${locale}.json`);
    writeFileSync(outputPath, JSON.stringify(messages, null, 2) + "\n", "utf-8");
    console.log(
      `[i18n-build] ✔ ${locale}.json (${Object.keys(messages).length} namespaces)`,
    );
  }
}

build();

if (isWatch) {
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  console.log("[i18n-build] Watching for changes in i118builder/messages/ ...");
  watch(BUILDER_MESSAGES_DIR, { recursive: true }, (_event, filename) => {
    if (!filename?.endsWith(".json")) return;
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log(`[i18n-build] Change detected: ${filename}`);
      build();
    }, 300);
  });
}
