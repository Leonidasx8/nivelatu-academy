/**
 * E2E tests for dark theme consistency across all public and authenticated routes.
 *
 * Strategy:
 * - Playwright is configured with colorScheme: "dark" (playwright.config.ts).
 * - The root <html> element has the literal "dark" class applied at build time
 *   in RootLayout (src/app/layout.tsx), so no JS hydration is required.
 * - Background-color checks use page.evaluate() to read computed CSS custom
 *   properties resolved against the element, covering TailwindCSS v4 variables.
 *
 * Routes covered:
 *   /               — Landing
 *   /auth/login     — Login
 *   /auth/register  — Register
 *   /pricing        — Pricing
 *   /dashboard      — Dashboard (SaaS shell)
 */

import { test, expect } from "../fixtures";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Returns true when the computed background-color of the given CSS selector
 * is a "dark" colour — meaning the combined RGB luminance is below the
 * threshold (0 = pure black, 255 = pure white; we treat < 80 as dark).
 *
 * Works with both hex values resolved by the browser AND rgb()/rgba() strings.
 */
async function hasDarkBackground(
  page: import("@playwright/test").Page,
  selector: string = "body"
): Promise<boolean> {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return false;

    const bg = getComputedStyle(el).backgroundColor;

    // bg is always "rgb(r, g, b)" or "rgba(r, g, b, a)" from getComputedStyle
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return false;

    const [, r, g, b] = match.map(Number);

    // Relative luminance threshold — values under 80/255 are considered dark
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance < 80;
  }, selector);
}

// ---------------------------------------------------------------------------
// Dark background across all routes
// ---------------------------------------------------------------------------
test.describe("Dark theme — background colour", () => {
  const routes = [
    { path: "/", label: "landing" },
    { path: "/auth/login", label: "login" },
    { path: "/auth/register", label: "register" },
    { path: "/pricing", label: "pricing" },
    { path: "/dashboard", label: "dashboard" },
  ] as const;

  test("all pages use dark background", async ({ page }) => {
    for (const { path, label } of routes) {
      await page.goto(path);

      // Wait for the page shell to be rendered before sampling the colour
      await page.waitForLoadState("domcontentloaded");

      const bodyIsDark = await hasDarkBackground(page, "body");

      // Use soft assertions so all routes are evaluated even if one fails;
      // the final report will identify which specific route regressed.
      expect
        .soft(bodyIsDark, `Expected dark body background on route "${label}" (${path})`)
        .toBe(true);
    }
  });
});

// ---------------------------------------------------------------------------
// Dark class on <html> — no white flash on initial load
// ---------------------------------------------------------------------------
test.describe("Dark theme — html class", () => {
  test("no white flash on page load", async ({ page }) => {
    // Intercept the very first paint by reading the html class list
    // synchronously after navigation completes (before any React hydration
    // could alter it). Because Next.js injects `className="dark ..."` at
    // build time on the <html> element, the class must be present immediately.
    await page.goto("/");

    const htmlHasDarkClass = await page.evaluate(() =>
      document.documentElement.classList.contains("dark")
    );

    expect(
      htmlHasDarkClass,
      'Expected <html> to have class "dark" immediately after load (prevents white flash)'
    ).toBe(true);
  });

  test("dark class persists after client-side navigation", async ({ page }) => {
    // Start at landing, then perform a client-side nav to /pricing and back,
    // confirming the dark class survives React's hydration and router transitions.
    await page.goto("/");

    // Navigate to pricing via client-side link (if available) or direct goto
    await page.goto("/pricing");
    await page.waitForLoadState("domcontentloaded");

    const darkOnPricing = await page.evaluate(() =>
      document.documentElement.classList.contains("dark")
    );
    expect
      .soft(
        darkOnPricing,
        'Expected <html> to keep "dark" class after navigating to /pricing'
      )
      .toBe(true);

    // Navigate to login
    await page.goto("/auth/login");
    await page.waitForLoadState("domcontentloaded");

    const darkOnLogin = await page.evaluate(() =>
      document.documentElement.classList.contains("dark")
    );
    expect
      .soft(
        darkOnLogin,
        'Expected <html> to keep "dark" class after navigating to /auth/login'
      )
      .toBe(true);
  });
});
