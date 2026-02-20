import type { FullConfig } from "@playwright/test";

/**
 * Global setup that pre-warms the Next.js dev server by loading
 * the landing page before any test worker starts. This ensures the
 * first-compilation latency doesn't cause timeouts when multiple
 * workers hit the server simultaneously.
 */
async function globalSetup(_config: FullConfig) {
  const baseURL = "http://localhost:3000";
  const routes = ["/", "/auth/login", "/auth/register", "/pricing"];

  for (const route of routes) {
    try {
      await fetch(`${baseURL}${route}`);
    } catch {
      // Server might not be ready yet; the webServer config handles startup
    }
  }
}

export default globalSetup;
