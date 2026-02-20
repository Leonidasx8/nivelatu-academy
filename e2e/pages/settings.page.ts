import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Settings page (/settings).
 * Covers the page heading and the six settings tabs.
 */
export class SettingsPage {
  readonly page: Page;

  // Page heading
  readonly heading: Locator;

  // Settings tabs
  readonly tabCuenta: Locator;
  readonly tabPerfil: Locator;
  readonly tabAcademia: Locator;
  readonly tabNotificaciones: Locator;
  readonly tabIntegraciones: Locator;
  readonly tabDatos: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole("heading", { name: /configuración/i });

    // Tab buttons — using tab role where available, button as fallback
    this.tabCuenta = page.getByRole("tab", { name: /^cuenta$/i });
    this.tabPerfil = page.getByRole("tab", { name: /^perfil$/i });
    this.tabAcademia = page.getByRole("tab", { name: /^academia$/i });
    this.tabNotificaciones = page.getByRole("tab", {
      name: /^notificaciones$/i,
    });
    this.tabIntegraciones = page.getByRole("tab", {
      name: /^integraciones$/i,
    });
    this.tabDatos = page.getByRole("tab", { name: /^datos$/i });
  }

  async goto() {
    await this.page.goto("/settings");
  }

  /**
   * Activate a settings tab by its visible label.
   * @param name - One of: Cuenta, Perfil, Academia, Notificaciones,
   *               Integraciones, Datos
   */
  async switchTab(name: string) {
    await this.page
      .getByRole("tab", { name: new RegExp(`^${name}$`, "i") })
      .click();
  }
}
