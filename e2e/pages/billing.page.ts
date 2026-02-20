import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Billing page (/billing).
 * Covers current plan, payment method, billing history, and action buttons.
 */
export class BillingPage {
  readonly page: Page;

  // Page heading
  readonly heading: Locator;

  // Content sections
  readonly currentPlanCard: Locator;
  readonly paymentMethod: Locator;
  readonly billingHistory: Locator;

  // Action buttons
  readonly changePlanButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole("heading", { name: /facturación/i });

    // Sections anchored by their visible heading text
    this.currentPlanCard = page.getByText(/plan actual/i).first();
    this.paymentMethod = page.getByText(/método de pago/i).first();
    this.billingHistory = page.getByText(/historial/i).first();

    // Action buttons
    this.changePlanButton = page.getByRole("button", {
      name: /cambiar plan/i,
    });
    this.cancelButton = page.getByRole("button", {
      name: /cancelar.*suscripción|cancelar plan/i,
    });
  }

  async goto() {
    await this.page.goto("/billing");
  }

  async openChangePlan() {
    await this.changePlanButton.click();
  }

  async openCancel() {
    await this.cancelButton.click();
  }
}
