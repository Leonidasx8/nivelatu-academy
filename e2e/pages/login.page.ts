import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Login page (/auth/login).
 */
export class LoginPage {
  readonly page: Page;

  // Brand panel (left side)
  readonly brandPanel: Locator;
  readonly sostacPills: Locator;

  // Form elements
  readonly heading: Locator;
  readonly subtitle: Locator;
  readonly googleButton: Locator;
  readonly githubButton: Locator;
  readonly divider: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly forgotPasswordLink: Locator;
  readonly submitButton: Locator;
  readonly registerLink: Locator;
  readonly securityBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    this.brandPanel = page.locator("[data-testid='auth-brand-panel']");
    this.sostacPills = page.getByText(/SOSTAC/i).first();

    this.heading = page.getByRole("heading", { name: /bienvenido/i });
    this.subtitle = page.getByText(/continúa con tu academia/i);
    this.googleButton = page.getByRole("button", { name: /google/i });
    this.githubButton = page.getByRole("button", { name: /github/i });
    this.divider = page.getByText(/— o —/i);
    this.emailInput = page.getByLabel(/correo|email/i);
    this.passwordInput = page.getByLabel(/contraseña|password/i);
    this.forgotPasswordLink = page.getByRole("link", {
      name: /olvidaste/i,
    });
    this.submitButton = page.getByRole("button", {
      name: /iniciar sesión/i,
    });
    this.registerLink = page.getByRole("link", { name: /regístrate/i });
    this.securityBadge = page.getByText(/conexión segura/i);
  }

  async goto() {
    await this.page.goto("/auth/login");
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async navigateToRegister() {
    await this.registerLink.click();
  }
}
