import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Dashboard page (/dashboard).
 * Covers SOSTAC progress widget, current step card, deliverables,
 * agent activity, recent activity feed, and sidebar navigation.
 */
export class DashboardPage {
  readonly page: Page;

  // Main content
  readonly welcomeHeading: Locator;
  readonly sostacProgress: Locator;
  readonly currentStepCard: Locator;
  readonly deliverablesSection: Locator;
  readonly agentActivity: Locator;
  readonly recentActivity: Locator;

  // Sidebar navigation links
  readonly sidebarDashboard: Locator;
  readonly sidebarMiAcademia: Locator;
  readonly sidebarEntregables: Locator;
  readonly sidebarConfiguracion: Locator;
  readonly sidebarFacturacion: Locator;
  readonly sidebarAdmin: Locator;

  constructor(page: Page) {
    this.page = page;

    // Main content locators
    this.welcomeHeading = page.getByRole("heading", { name: /bienvenida/i });
    this.sostacProgress = page.getByText(/progreso sostac/i);
    this.currentStepCard = page.getByRole("button", { name: /continuar/i });
    this.deliverablesSection = page.getByRole("heading", {
      name: /entregables/i,
    });
    this.agentActivity = page.getByText(/agente/i).first();
    this.recentActivity = page.getByText(/actividad/i).first();

    // Sidebar navigation — resolved by accessible link names
    this.sidebarDashboard = page.getByRole("link", { name: /^dashboard$/i });
    this.sidebarMiAcademia = page.getByRole("link", { name: /mi academia/i });
    this.sidebarEntregables = page.getByRole("link", { name: /entregables/i });
    this.sidebarConfiguracion = page.getByRole("link", {
      name: /configuración/i,
    });
    this.sidebarFacturacion = page.getByRole("link", { name: /facturación/i });
    this.sidebarAdmin = page.getByRole("link", { name: /^admin$/i });
  }

  async goto() {
    await this.page.goto("/dashboard");
  }

  async clickContinue() {
    await this.currentStepCard.click();
  }

  /**
   * Click a sidebar navigation link by its visible label.
   * @param label - One of: Dashboard, Mi Academia, Entregables,
   *                Configuración, Facturación, Admin
   */
  async navigateTo(label: string) {
    await this.page.getByRole("link", { name: new RegExp(label, "i") }).click();
  }
}
