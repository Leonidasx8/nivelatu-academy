import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Admin panel page (/admin).
 * Covers the page heading and seven admin management tabs.
 */
export class AdminPage {
  readonly page: Page;

  // Page heading
  readonly heading: Locator;

  // Admin tabs
  readonly tabUsuarios: Locator;
  readonly tabAcademias: Locator;
  readonly tabEntregables: Locator;
  readonly tabContenido: Locator;
  readonly tabAnalytics: Locator;
  readonly tabFacturacion: Locator;
  readonly tabSistema: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole("heading", {
      name: /panel de administración/i,
    });

    // Tab buttons
    this.tabUsuarios = page.getByRole("tab", { name: /^usuarios$/i });
    this.tabAcademias = page.getByRole("tab", { name: /^academias$/i });
    this.tabEntregables = page.getByRole("tab", { name: /^entregables$/i });
    this.tabContenido = page.getByRole("tab", { name: /^contenido$/i });
    this.tabAnalytics = page.getByRole("tab", { name: /^analytics$/i });
    this.tabFacturacion = page.getByRole("tab", { name: /^facturación$/i });
    this.tabSistema = page.getByRole("tab", { name: /^sistema$/i });
  }

  async goto() {
    await this.page.goto("/admin");
  }

  /**
   * Activate an admin tab by its visible label.
   * @param name - One of: Usuarios, Academias, Entregables, Contenido,
   *               Analytics, Facturación, Sistema
   */
  async switchTab(name: string) {
    await this.page
      .getByRole("tab", { name: new RegExp(`^${name}$`, "i") })
      .click();
  }
}
