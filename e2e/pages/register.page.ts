import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Register page (/auth/register).
 * 3-step wizard: Account → Profile → Plan
 */
export class RegisterPage {
  readonly page: Page;

  // Step indicator
  readonly stepIndicator: Locator;

  // Step 1: Account
  readonly accountHeading: Locator;
  readonly googleButton: Locator;
  readonly githubButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly termsCheckbox: Locator;
  readonly continueButton: Locator;

  // Step 2: Profile
  readonly profileHeading: Locator;
  readonly academyNameInput: Locator;
  readonly backButton: Locator;

  // Step 3: Plan
  readonly planHeading: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.stepIndicator = page.locator("[data-testid='step-indicator']");

    // Step 1
    this.accountHeading = page.getByRole("heading", {
      name: /crea tu cuenta/i,
    });
    this.googleButton = page.getByRole("button", { name: /google/i });
    this.githubButton = page.getByRole("button", { name: /github/i });
    this.firstNameInput = page.getByLabel(/nombre/i).first();
    this.lastNameInput = page.getByLabel(/apellido/i);
    this.emailInput = page.getByLabel(/correo|email/i);
    this.passwordInput = page.getByLabel(/contraseña|password/i);
    this.termsCheckbox = page.getByRole("checkbox");
    this.continueButton = page.getByRole("button", { name: /continuar/i });

    // Step 2
    this.profileHeading = page.getByRole("heading", {
      name: /cuéntanos/i,
    });
    this.academyNameInput = page.getByLabel(/nombre.*academia/i);
    this.backButton = page.getByRole("button", { name: /anterior|atrás/i });

    // Step 3
    this.planHeading = page.getByRole("heading", { name: /elige tu plan/i });
    this.createButton = page.getByRole("button", {
      name: /crear mi academia/i,
    });
  }

  async goto() {
    await this.page.goto("/auth/register");
  }

  async fillStep1(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async goToNextStep() {
    await this.continueButton.click();
  }

  async goBack() {
    await this.backButton.click();
  }
}
