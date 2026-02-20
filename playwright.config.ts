import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration for NivelatuAcademy E2E tests.
 *
 * Best practices applied:
 * - webServer auto-starts Next.js dev server
 * - Parallel execution for speed
 * - Retries on CI to handle flakiness
 * - Multiple viewport projects (desktop, tablet, mobile)
 * - Trace capture on first retry for debugging
 * - Screenshot on failure for quick diagnosis
 */
export default defineConfig({
  testDir: "./e2e/tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html", { open: "never" }],
    ["list"],
  ],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    locale: "es-ES",
    colorScheme: "dark",
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Tablet",
      use: {
        ...devices["iPad Pro 11"],
      },
    },
    {
      name: "Mobile",
      use: {
        ...devices["iPhone 14"],
      },
    },
  ],
  webServer: {
    command: "pnpm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
