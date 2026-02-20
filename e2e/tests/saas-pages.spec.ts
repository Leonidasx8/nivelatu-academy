/**
 * E2E tests for SaaS-authenticated routes.
 *
 * Covers:
 *   /dashboard  — welcome, SOSTAC progress, current step, deliverables, agents, sidebar nav
 *   /settings   — page heading, six tabs, tab content switching
 *   /billing    — heading, current plan card, payment method, invoice history
 *   /admin      — heading, seven tabs, tab content switching
 *
 * All assertions are anchored to text and ARIA roles that are produced by the
 * actual components and mock data, so the suite stays resilient to CSS changes.
 *
 * Accessibility checks exclude animated elements to avoid axe false-positives
 * that arise from transitioning CSS properties.
 */

import { test, expect } from "../fixtures";

// ─────────────────────────────────────────────────────────────────────────────
// DASHBOARD  /dashboard
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Dashboard (/dashboard)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dashboard");
  });

  test("dashboard renders welcome message", async ({ page }) => {
    // DashboardPage renders: <h1>Bienvenida, {firstName} 👋</h1>
    // Mock user firstName is "Mariana"
    const heading = page.getByRole("heading", { name: /bienvenida/i });
    await expect(heading).toBeVisible();
  });

  test("dashboard shows SOSTAC progress widget", async ({ page }) => {
    // SOSTACProgressWidget renders h2 "Progreso SOSTAC" and each phase letter
    // in a circular badge (S, O, ST, T, A, C) alongside its label text.
    await expect(page.getByText(/progreso sostac/i)).toBeVisible();

    // At least the "S" phase letter must be present inside the widget
    const phaseLetters = ["S", "O", "ST", "T", "A", "C"];
    for (const letter of phaseLetters) {
      await expect(
        page.getByText(letter, { exact: true }).first()
      ).toBeVisible();
    }
  });

  test("dashboard shows current step card with continue button", async ({
    page,
  }) => {
    // CurrentStepCard renders a link labelled "Continuar" that points to
    // /academy/forge — uses a <Link> rendered as an <a> element.
    const continueLink = page.getByRole("link", { name: /continuar/i });
    await expect(continueLink).toBeVisible();
  });

  test("dashboard shows deliverables overview", async ({ page }) => {
    // DeliverablesOverview renders a section heading "Entregables"
    const heading = page.getByRole("heading", { name: /entregables/i });
    await expect(heading).toBeVisible();
  });

  test("dashboard shows agent activity panel", async ({ page }) => {
    // AgentActivityPanel renders an h2 "Agentes" and lists all 10 agents by name.
    // Verify the panel heading and at least two known agent names.
    await expect(page.getByText(/^agentes$/i).first()).toBeVisible();
    await expect(page.getByText(/forge/i).first()).toBeVisible();
    await expect(page.getByText(/delfino/i).first()).toBeVisible();
  });

  test("dashboard sidebar navigation works", async ({ page }) => {
    // Click "Configuración" in the sidebar → should navigate to /settings
    await page.getByRole("link", { name: /configuración/i }).click();
    await expect(page).toHaveURL(/\/settings/);

    // Navigate back to a page with the sidebar, then click "Facturación"
    await page.goto("/dashboard");
    await page.getByRole("link", { name: /facturación/i }).click();
    await expect(page).toHaveURL(/\/billing/);
  });

  test("dashboard passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse", ".animate-cable-flow"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// SETTINGS  /settings
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Settings (/settings)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/settings");
  });

  test("settings page renders with tabs", async ({ page }) => {
    // Page heading
    await expect(
      page.getByRole("heading", { name: /configuración/i })
    ).toBeVisible();

    // All six tabs must be present (rendered as TabsTrigger = role="tab")
    const expectedTabs = [
      "Cuenta",
      "Perfil",
      "Academia",
      "Notificaciones",
      "Integraciones",
      "Datos",
    ];
    for (const tabLabel of expectedTabs) {
      await expect(
        page.getByRole("tab", { name: new RegExp(`^${tabLabel}$`, "i") })
      ).toBeVisible();
    }
  });

  test("settings tabs switch content", async ({ page }) => {
    // Click "Perfil" tab — TabProfile renders "Información personal" heading
    // and a "Nombre" label (for the first-name input field).
    await page.getByRole("tab", { name: /^perfil$/i }).click();
    await expect(
      page.getByText(/información personal/i).first()
    ).toBeVisible();
    await expect(page.getByText(/nombre/i).first()).toBeVisible();

    // Click "Academia" tab — TabAcademy renders academy-related content
    await page.getByRole("tab", { name: /^academia$/i }).click();
    // Tab panel becomes visible; look for the academy section heading
    await expect(page.getByText(/academia/i).first()).toBeVisible();
  });

  test("settings passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse", ".animate-cable-flow"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// BILLING  /billing
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Billing (/billing)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/billing");
  });

  test("billing shows current plan", async ({ page }) => {
    // Page heading
    await expect(
      page.getByRole("heading", { name: /facturación/i })
    ).toBeVisible();

    // CurrentPlanCard renders "Plan actual" label, plan name "Pro", and price "$129"
    await expect(page.getByText(/plan actual/i).first()).toBeVisible();
    // Plan label from PLAN_LABELS["pro"] = "Pro"
    await expect(page.getByText(/^pro$/i).first()).toBeVisible();
    // Price shown as "$129" (CURRENT_PLAN_PRICE = 129)
    await expect(page.getByText(/\$129/i).first()).toBeVisible();
  });

  test("billing shows payment method", async ({ page }) => {
    // PaymentMethod component renders: "Método de pago" label, "Visa terminada en 6411"
    await expect(page.getByText(/método de pago/i).first()).toBeVisible();
    await expect(page.getByText(/visa/i).first()).toBeVisible();
  });

  test("billing shows invoice history", async ({ page }) => {
    // BillingHistory renders "Historial de facturación" label and a table with rows.
    // Three invoices exist in mock data, each with status "Pagado".
    await expect(
      page.getByText(/historial de facturación/i).first()
    ).toBeVisible();
    // Table has at least one "Pagado" status cell
    await expect(page.getByText(/pagado/i).first()).toBeVisible();
  });

  test("billing passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse", ".animate-cable-flow"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ADMIN  /admin
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Admin (/admin)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/admin");
  });

  test("admin page renders with tabs", async ({ page }) => {
    // Page heading
    await expect(
      page.getByRole("heading", { name: /panel de administración/i })
    ).toBeVisible();

    // Seven tabs defined in TABS constant
    const expectedTabs = [
      "Usuarios",
      "Academias",
      "Entregables",
      "Contenido",
      "Analytics",
      "Facturación",
      "Sistema",
    ];
    for (const tabLabel of expectedTabs) {
      await expect(
        page.getByRole("tab", { name: new RegExp(`^${tabLabel}$`, "i") })
      ).toBeVisible();
    }
  });

  test("admin tabs switch content", async ({ page }) => {
    // Click "Academias" tab — AdminAcademies renders a table with column headers
    // "Academia", "Plan", "Progreso" (visible on any viewport).
    await page.getByRole("tab", { name: /^academias$/i }).click();
    await expect(page.getByText(/progreso/i).first()).toBeVisible();

    // Click "Sistema" tab — AdminSystem renders "Feature flags" and
    // "Información del sistema" section labels.
    await page.getByRole("tab", { name: /^sistema$/i }).click();
    await expect(page.getByText(/feature flags/i).first()).toBeVisible();
    await expect(
      page.getByText(/información del sistema/i).first()
    ).toBeVisible();
  });

  test("admin passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse", ".animate-cable-flow"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});
