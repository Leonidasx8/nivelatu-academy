import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Pricing page (/pricing).
 * Covers billing toggle, plan cards, feature comparison table, and FAQ.
 */
export class PricingPage {
  readonly page: Page;

  // Billing cycle toggle
  readonly billingToggleMonthly: Locator;
  readonly billingToggleAnnual: Locator;
  readonly saveBadge: Locator;

  // Plan cards
  readonly starterCard: Locator;
  readonly proCard: Locator;
  readonly enterpriseCard: Locator;
  readonly planCards: Locator;

  // Feature comparison table
  readonly featureTable: Locator;

  // FAQ section
  readonly faqSection: Locator;

  constructor(page: Page) {
    this.page = page;

    // Billing toggle buttons
    this.billingToggleMonthly = page.getByRole("button", { name: /mensual/i });
    this.billingToggleAnnual = page.getByRole("button", { name: /anual/i });
    this.saveBadge = page.getByText(/ahorra 20%/i);

    // Individual plan cards resolved by their heading text (exact match to avoid FAQ/footer matches)
    this.starterCard = page.getByRole("heading", { name: "Starter", exact: true });
    this.proCard = page.getByRole("heading", { name: "Pro", exact: true });
    this.enterpriseCard = page.getByRole("heading", { name: "Enterprise", exact: true });

    // All plan cards as a collection (data-testid fallback for assertion counts)
    this.planCards = page.locator("[data-testid='plan-card']");

    // Feature comparison section anchored by its heading
    this.featureTable = page.getByRole("heading", {
      name: /comparación completa/i,
    });

    // FAQ section anchored by its heading
    this.faqSection = page.getByRole("heading", {
      name: /preguntas frecuentes/i,
    });
  }

  async goto() {
    await this.page.goto("/pricing");
  }

  async selectMonthly() {
    await this.billingToggleMonthly.click();
  }

  async selectAnnual() {
    await this.billingToggleAnnual.click();
  }
}
