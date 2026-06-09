// Generates branded, self-contained SVG artwork for the Roofpro site.
// Architectural line-art on premium gradients — no external image deps.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const PALETTES = {
  slate: ["#1f2a3a", "#0f1722"],
  steel: ["#2a3a4f", "#16202e"],
  sand: ["#b9a489", "#7c6a52"],
  warm: ["#caa06a", "#7c5a32"],
  brick: ["#9e3b30", "#5e201a"],
  ember: ["#c8442f", "#7a2418"],
  pine: ["#33524a", "#16261f"],
  dusk: ["#3b3550", "#1d1830"],
};

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// Skyline / rooftop silhouette band
function rooftops(rand, w, h, baseY, color, opacity) {
  let x = -40;
  let d = `M ${x} ${h} L ${x} ${baseY}`;
  while (x < w + 40) {
    const bw = 60 + rand() * 120;
    const peak = baseY - (30 + rand() * 90);
    const flat = rand() > 0.55;
    if (flat) {
      const topY = baseY - (20 + rand() * 70);
      d += ` L ${x} ${topY} L ${x + bw} ${topY} L ${x + bw} ${baseY}`;
    } else {
      d += ` L ${x + bw / 2} ${peak} L ${x + bw} ${baseY}`;
    }
    x += bw;
  }
  d += ` L ${w + 40} ${h} Z`;
  return `<path d="${d}" fill="${color}" opacity="${opacity}"/>`;
}

function makeSvg({ key, w, h, palette, label }) {
  const seed = hash(key);
  const rand = rng(seed);
  const [c1, c2] = PALETTES[palette] ?? PALETTES.slate;
  const gid = `g_${seed.toString(36)}`;

  const sun = `<circle cx="${w * (0.66 + rand() * 0.2)}" cy="${h * 0.26}" r="${
    36 + rand() * 26
  }" fill="#ffffff" opacity="0.10"/>`;

  // diagonal shingle hatch
  let hatch = "";
  for (let i = -h; i < w; i += 26) {
    hatch += `<line x1="${i}" y1="0" x2="${i + h}" y2="${h}" stroke="#ffffff" stroke-width="1" opacity="0.04"/>`;
  }

  const band1 = rooftops(rand, w, h, h * 0.82, "#000000", 0.18);
  const band2 = rooftops(rng(seed ^ 0x9e37), w, h, h * 0.92, "#000000", 0.3);

  // grain dots
  let grain = "";
  for (let i = 0; i < 60; i++) {
    grain += `<circle cx="${rand() * w}" cy="${rand() * h}" r="${
      rand() * 1.4
    }" fill="#ffffff" opacity="${0.02 + rand() * 0.05}"/>`;
  }

  const labelMarkup = label
    ? `<g opacity="0.9"><rect x="${w / 2 - 92}" y="${h - 46}" width="184" height="0" />
       <text x="50%" y="${h * 0.52}" text-anchor="middle"
         font-family="'Plus Jakarta Sans', sans-serif" font-size="${Math.round(
           Math.min(w, h) * 0.12,
         )}" font-weight="800" fill="#ffffff" opacity="0.14"
         letter-spacing="2">${label}</text></g>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">
  <defs>
    <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${gid})"/>
  ${sun}
  ${hatch}
  ${band1}
  ${band2}
  ${labelMarkup}
  ${grain}
  <rect width="${w}" height="${h}" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="2"/>
</svg>`;
}

// Portrait avatar (head & shoulders silhouette on gradient)
function makeAvatar({ key, size, palette }) {
  const seed = hash(key);
  const [c1, c2] = PALETTES[palette] ?? PALETTES.steel;
  const gid = `a_${seed.toString(36)}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img">
  <defs><linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
  </linearGradient></defs>
  <rect width="${size}" height="${size}" fill="url(#${gid})"/>
  <circle cx="${size / 2}" cy="${size * 0.4}" r="${size * 0.17}" fill="#ffffff" opacity="0.85"/>
  <path d="M ${size * 0.2} ${size} C ${size * 0.2} ${size * 0.66}, ${size * 0.8} ${
    size * 0.66
  }, ${size * 0.8} ${size} Z" fill="#ffffff" opacity="0.85"/>
</svg>`;
}

const jobs = [
  // hero + structural
  { key: "hero", w: 1600, h: 1000, palette: "slate", label: "ROOFPRO" },
  { key: "about", w: 800, h: 900, palette: "steel" },
  { key: "cta", w: 1600, h: 600, palette: "brick" },
  // services
  { key: "service-gutter", w: 700, h: 520, palette: "steel" },
  { key: "service-energy", w: 700, h: 520, palette: "warm" },
  { key: "service-flat", w: 700, h: 520, palette: "pine" },
  // projects
  { key: "project-1", w: 700, h: 560, palette: "slate" },
  { key: "project-2", w: 700, h: 560, palette: "warm" },
  { key: "project-3", w: 700, h: 560, palette: "steel" },
  { key: "project-wide", w: 1000, h: 560, palette: "brick" },
  // team
  { key: "team-1", w: 600, h: 720, palette: "steel" },
  { key: "team-2", w: 600, h: 720, palette: "sand" },
  { key: "team-3", w: 600, h: 720, palette: "dusk" },
  // blog
  { key: "blog-1", w: 800, h: 560, palette: "warm" },
  { key: "blog-2", w: 800, h: 560, palette: "steel" },
];

for (const j of jobs) {
  writeFileSync(join(OUT, `${j.key}.svg`), makeSvg(j).trim());
}

const avatars = [
  { key: "avatar-1", palette: "warm" },
  { key: "avatar-2", palette: "steel" },
  { key: "avatar-3", palette: "brick" },
  { key: "avatar-hero", palette: "pine" },
];
for (const a of avatars) {
  writeFileSync(
    join(OUT, `${a.key}.svg`),
    makeAvatar({ key: a.key, size: 160, palette: a.palette }).trim(),
  );
}

console.log(`Generated ${jobs.length + avatars.length} SVG assets in public/images`);
