/**
 * E2E tests for SOSTAC academy routes.
 *
 * Covers:
 *   /academy              — SOSTAC hub map with agent nodes
 *   /academy/forge        — Module hub: agent header + module cards
 *   /academy/forge/forge-m3/paso-1  — Step workspace, navigation, chat toggle
 *   /academy/deliverables — Deliverable list page
 *
 * Route notes (derived from the Next.js app router):
 *   - Hub map:   /academy  →  SostacMap component
 *   - Module hub: /academy/[agentId]  →  ModuleHub component
 *   - Step view:  /academy/[agentId]/[moduleId]/[stepId]  →  WorkspacePanel + ChatPanel
 *   - Deliverables: /academy/deliverables
 *
 * Mock data anchors used:
 *   - mapNodes include "Delfino" and "Forge" (status: completed / in_progress)
 *   - forgeModules[0] = { id: "forge-m1", name: "Misión", status: "completed" }
 *   - forgeModules[2] = { id: "forge-m3", name: "Modelo de Negocio", status: "in_progress" }
 *   - sampleSteps[0] = { moduleId: "forge-m3", order: 1, title: "Fuentes de Ingresos" }
 *   - StepNavigation renders a "Siguiente" button for non-last steps
 *   - ChatPanel is rendered (hidden xl:flex) — verify its container presence via text
 */

import { test, expect } from "../fixtures";

// ─────────────────────────────────────────────────────────────────────────────
// SOSTAC HUB  /academy
// ─────────────────────────────────────────────────────────────────────────────

test.describe("SOSTAC Hub (/academy)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/academy");
  });

  test("hub map renders agent nodes", async ({ page }) => {
    // SostacMap renders MapNodeComponent for every mapNode.
    // Each node shows agent.name as a <span> inside a Link or div.
    // "Delfino" has status "completed", "Forge" has status "in_progress" —
    // both render their names unconditionally.
    await expect(page.getByText(/delfino/i).first()).toBeVisible();
    await expect(page.getByText(/forge/i).first()).toBeVisible();
  });

  test("hub map node links to agent module page", async ({ page }) => {
    // MapNodeComponent wraps non-locked nodes in <Link href="/academy/{agentId}">.
    // "Delfino" is completed (not locked), so its link goes to /academy/delfino.
    // "Forge" is in_progress (not locked), so its link goes to /academy/forge.
    // Click the Forge node link and verify the URL.
    const forgeLink = page.getByRole("link", { name: /forge/i }).first();
    await expect(forgeLink).toBeVisible();
    await forgeLink.click();
    await expect(page).toHaveURL(/\/academy\/forge/);
  });

  test("hub passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse", ".animate-cable-flow"],
      disableRules: ["color-contrast", "label", "button-name", "scrollable-region-focusable"],
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// MODULE HUB  /academy/forge
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Module Hub (/academy/forge)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/academy/forge");
  });

  test("module hub shows agent info", async ({ page }) => {
    // ModuleHub renders an h1 with agent.name ("Forge") and agent.role ("Análisis Interno")
    // and agent.description.
    await expect(
      page.getByRole("heading", { name: /forge/i })
    ).toBeVisible();
    // Agent role text
    await expect(page.getByText(/análisis interno/i).first()).toBeVisible();
  });

  test("module hub shows module cards", async ({ page }) => {
    // forgeModules[0] has name "Misión" and status "completed".
    // Its progress text: "4/4 pasos" (completedSteps/totalSteps).
    await expect(page.getByText(/misión/i).first()).toBeVisible();
    await expect(page.getByText(/pasos/i).first()).toBeVisible();
  });

  test("module card links to step page", async ({ page }) => {
    // Non-locked module cards are wrapped in <Link href="/academy/forge/{module.id}/paso-1">.
    // "Misión" (forge-m1, completed) and "Modelo de Negocio" (forge-m3, in_progress)
    // are both non-locked, so both are clickable.
    // Click the "Misión" card link — it goes to /academy/forge/forge-m1/paso-1.
    const misionLink = page.getByRole("link", { name: /misión/i }).first();
    await expect(misionLink).toBeVisible();
    await misionLink.click();
    await expect(page).toHaveURL(/\/academy\/forge\/forge-m1\/paso-1/);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// STEP VIEW  /academy/forge/forge-m3/paso-1
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Step View (/academy/forge/forge-m3/paso-1)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/academy/forge/forge-m3/paso-1");
  });

  test("step view renders workspace panel", async ({ page }) => {
    // WorkspaceHeader renders the step title from sampleSteps[0].title:
    // "Fuentes de Ingresos" and the module name badge "Modelo de Negocio".
    // Also renders "Paso 1 de {totalSteps}" progress text.
    await expect(
      page.getByRole("heading", { name: /fuentes de ingresos/i })
    ).toBeVisible();
    // Progress indicator text
    await expect(page.getByText(/paso 1 de/i).first()).toBeVisible();
  });

  test("step view has navigation buttons", async ({ page }) => {
    // StepNavigation renders a "Siguiente" button for steps that are not the last.
    // paso-1 of forge-m3 has order=1 and totalSteps=4, so it is not the last step.
    const nextButton = page.getByRole("button", { name: /siguiente/i });
    await expect(nextButton).toBeVisible();
  });

  test("step view shows chat panel toggle", async ({ page }) => {
    // ChatPanel is rendered in the DOM (hidden xl:flex on smaller viewports).
    // The chat messages include "Forge dice:" (agent name + "dice:") and
    // the initial agent message text. We look for text present in sampleChatMessages.
    // On a 1440px desktop viewport (Desktop Chrome project), the chat panel is visible.
    // We verify the chat container is in the DOM via the chat message content.
    await expect(
      page.getByText(/forge dice:/i).first()
    ).toBeVisible();
  });

  test("step view passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse", ".animate-cable-flow"],
      disableRules: ["color-contrast", "label", "button-name", "scrollable-region-focusable"],
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// DELIVERABLES  /academy/deliverables
// ─────────────────────────────────────────────────────────────────────────────

test.describe("Deliverables (/academy/deliverables)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/academy/deliverables");
  });

  test("deliverables list renders", async ({ page }) => {
    // DeliverablesPage renders an h1 "Mis Entregables" and shows a count of
    // deliverables using text like "9 entregables en total" (9 in mock data).
    await expect(
      page.getByRole("heading", { name: /mis entregables/i })
    ).toBeVisible();
    // Subtitle text includes "entregables en total"
    await expect(page.getByText(/entregables en total/i).first()).toBeVisible();
    // At least one known deliverable name should be rendered in the list
    await expect(
      page.getByText(/brief estratégico inicial/i).first()
    ).toBeVisible();
  });

  test("deliverables passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse", ".animate-cable-flow"],
      disableRules: ["color-contrast", "label", "button-name", "scrollable-region-focusable"],
    });
  });
});
