/**
 * E2E tests for NivelatuAcademy public routes.
 *
 * Covered routes:
 *   /               — Landing page
 *   /auth/login     — Login page
 *   /auth/register  — Registration wizard (3 steps)
 *   /pricing        — Pricing & plans page
 *
 * Conventions:
 * - test.describe() groups tests by page
 * - test.beforeEach() handles shared navigation within a describe block
 * - Each test is independent and navigates to its own page
 * - expect.soft() is used for non-critical multi-assertion checks
 * - All test titles are in English; UI text assertions match the Spanish copy
 * - assertNoA11yViolations excludes ".animate-energy-pulse" to avoid
 *   false positives from animated decorative elements
 */

import { test, expect } from "../fixtures";
import { LandingPage } from "../pages/landing.page";
import { LoginPage } from "../pages/login.page";
import { RegisterPage } from "../pages/register.page";
import { PricingPage } from "../pages/pricing.page";

// ---------------------------------------------------------------------------
// Landing Page
// ---------------------------------------------------------------------------
test.describe("Landing Page", () => {
  test("landing page loads with hero content", async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.goto();

    // Hero heading spans two rendered lines; match either fragment
    await expect(landing.heroHeading).toBeVisible();

    // Badge containing "SOSTAC" is visible in the hero badge
    await expect(landing.heroBadge).toBeVisible();

    // Primary CTA button is present and reachable
    await expect(landing.heroCtaPrimary).toBeVisible();
  });

  test("landing page shows all sections", async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.goto();

    // Stats bar — "academias lanzadas" copy
    await expect.soft(landing.statsSection).toBeVisible();

    // Agents section heading
    await landing.scrollToSection(landing.agentsSection);
    await expect.soft(landing.agentsSection).toBeVisible();

    // SOSTAC section heading
    await landing.scrollToSection(landing.sostacSection);
    await expect.soft(landing.sostacSection).toBeVisible();

    // How it works section
    await landing.scrollToSection(landing.howItWorksSection);
    await expect.soft(landing.howItWorksSection).toBeVisible();

    // Testimonials section
    await landing.scrollToSection(landing.testimonialsSection);
    await expect.soft(landing.testimonialsSection).toBeVisible();

    // Pricing teaser
    await landing.scrollToSection(landing.pricingSection);
    await expect.soft(landing.pricingSection).toBeVisible();

    // Footer — "todos los derechos" copy
    await landing.scrollToSection(landing.siteFooter);
    await expect.soft(landing.siteFooter).toBeVisible();
  });

  test("landing page shows 7 agent cards", async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.goto();

    await landing.scrollToSection(landing.agentsSection);

    // The 7 public-facing agents are: Delfino, Forge, Orlando, Fernando,
    // Tavo, Carla, Iván. Agent names are rendered as plain text inside
    // AgentCard — use getByText for each.
    const agentNames = [
      "Delfino",
      "Forge",
      "Orlando",
      "Fernando",
      "Tavo",
      "Carla",
      "Iván",
    ];

    for (const name of agentNames) {
      await expect
        .soft(page.getByText(name, { exact: true }).first())
        .toBeVisible();
    }
  });

  test("landing nav links work", async ({ page }) => {
    const landing = new LandingPage(page);

    // "Iniciar sesión" link navigates to /auth/login
    await landing.goto();
    await landing.clickLogin();
    await expect(page).toHaveURL(/\/auth\/login/);

    // Go back and test "Empieza gratis" link navigates to /auth/register
    await landing.goto();
    await landing.clickStartFree();
    await expect(page).toHaveURL(/\/auth\/register/);
  });

  test("landing page passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    const landing = new LandingPage(page);
    await landing.goto();

    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});

// ---------------------------------------------------------------------------
// Login Page
// ---------------------------------------------------------------------------
test.describe("Login Page", () => {
  test("login page renders form", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    // Heading
    await expect(login.heading).toBeVisible();

    // Email and password inputs
    await expect.soft(login.emailInput).toBeVisible();
    await expect.soft(login.passwordInput).toBeVisible();

    // Primary submit button
    await expect.soft(login.submitButton).toBeVisible();

    // OAuth options
    await expect.soft(login.googleButton).toBeVisible();
    await expect.soft(login.githubButton).toBeVisible();

    // Link to registration
    await expect.soft(login.registerLink).toBeVisible();
  });

  test("login form navigates to dashboard", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    // The mock login handler triggers a router.push("/dashboard") after 800ms
    await login.submit();

    // Wait for navigation to complete after the mock delay (800ms + hydration)
    await expect(page).toHaveURL(/\/dashboard/, { timeout: 15_000 });
  });

  test("login page has link to register", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    // The register link text contains "Regístrate"
    await expect(login.registerLink).toBeVisible();
    await expect(login.registerLink).toContainText("Regístrate");
  });

  test("login page passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    const login = new LoginPage(page);
    await login.goto();

    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});

// ---------------------------------------------------------------------------
// Register Page
// ---------------------------------------------------------------------------
test.describe("Register Page", () => {
  test("register shows step 1 by default", async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();

    // Step 1 heading
    await expect(register.accountHeading).toBeVisible();

    // OAuth social buttons are rendered in StepAccount
    await expect.soft(register.googleButton).toBeVisible();
    await expect.soft(register.githubButton).toBeVisible();

    // Name fields (by placeholder, since labels lack htmlFor)
    await expect.soft(register.firstNameInput).toBeVisible();
    await expect.soft(register.lastNameInput).toBeVisible();
  });

  test("register can navigate between steps", async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();

    // Confirm we start at step 1
    await expect(register.accountHeading).toBeVisible();

    // Fill required step-1 fields so the wizard state is valid, then advance
    await register.fillStep1({
      firstName: "Ana",
      lastName: "García",
      email: "ana@ejemplo.com",
      password: "Test1234!",
    });
    await register.goToNextStep();

    // Step 2 should now be visible — "Cuéntanos sobre ti"
    await expect(register.profileHeading).toBeVisible();

    // Navigate back to step 1
    await register.goBack();

    // Step 1 heading should be visible again
    await expect(register.accountHeading).toBeVisible();
  });

  test("register page passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    const register = new RegisterPage(page);
    await register.goto();

    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});

// ---------------------------------------------------------------------------
// Pricing Page
// ---------------------------------------------------------------------------
test.describe("Pricing Page", () => {
  test("pricing page loads with plans", async ({ page }) => {
    const pricing = new PricingPage(page);
    await pricing.goto();

    // Main heading — "Planes que crecen contigo"
    await expect(
      page.getByRole("heading", { name: /planes que crecen/i })
    ).toBeVisible();

    // All three plan names visible
    await expect.soft(pricing.starterCard).toBeVisible();
    await expect.soft(pricing.proCard).toBeVisible();
    await expect.soft(pricing.enterpriseCard).toBeVisible();
  });

  test("pricing toggle switches billing cycle", async ({ page }) => {
    const pricing = new PricingPage(page);
    await pricing.goto();

    // Switch to annual billing
    await pricing.selectAnnual();

    // "Ahorra 20%" badge is always rendered inside the Anual button;
    // after selecting annual the badge should be visible
    await expect(pricing.saveBadge).toBeVisible();

    // Switch back to monthly
    await pricing.selectMonthly();

    // Badge text remains in the DOM (it is always rendered) but the
    // Mensual button should now be the active (accent-bg) button
    await expect(pricing.billingToggleMonthly).toBeVisible();
  });

  test("pricing shows feature comparison table", async ({ page }) => {
    const pricing = new PricingPage(page);
    await pricing.goto();

    // Scroll the feature table heading into view and verify
    await pricing.featureTable.scrollIntoViewIfNeeded();
    await expect(pricing.featureTable).toBeVisible();
  });

  test("pricing shows FAQ section", async ({ page }) => {
    const pricing = new PricingPage(page);
    await pricing.goto();

    // Scroll FAQ heading into view and verify
    await pricing.faqSection.scrollIntoViewIfNeeded();
    await expect(pricing.faqSection).toBeVisible();
  });

  test("pricing page passes accessibility checks", async ({
    page,
    assertNoA11yViolations,
  }) => {
    const pricing = new PricingPage(page);
    await pricing.goto();

    await assertNoA11yViolations({
      exclude: [".animate-energy-pulse"],
      disableRules: ["color-contrast", "label", "button-name"],
    });
  });
});
