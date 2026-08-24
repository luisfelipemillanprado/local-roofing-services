import { defineConfig, devices } from "@playwright/test";

/* dedicated port so tests never collide with the MCP-driven dev server on :3000 */
const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  /* baselines grouped by viewport project: e2e/__screenshots__/desktop/home-en.png */
  snapshotPathTemplate: "e2e/__screenshots__/{projectName}/{arg}{ext}",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "html" : "list",
  use: {
    baseURL,
    /* determinism only: browser-level emulation, no app code involved */
    colorScheme: "light",
    contextOptions: { reducedMotion: "reduce" },
    trace: "on-first-retry",
  },
  expect: {
    toHaveScreenshot: {
      /* freeze CSS animations/transitions at capture time only */
      animations: "disabled",
      /* tolerate sub-pixel anti-aliasing noise */
      maxDiffPixelRatio: 0.01,
    },
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  /* production build (SSG, deterministic); `pnpm build` also compiles the gitignored i18n messages */
  webServer: {
    command: "pnpm build && pnpm start",
    env: { PORT: String(PORT) },
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
