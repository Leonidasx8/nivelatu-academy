import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Landing page (/).
 * Encapsulates all selectors and user interactions.
 */
export class LandingPage {
  readonly page: Page;

  // Navigation
  readonly navLogo: Locator;
  readonly navLoginLink: Locator;
  readonly navStartButton: Locator;

  // Hero section
  readonly heroBadge: Locator;
  readonly heroHeading: Locator;
  readonly heroCtaPrimary: Locator;
  readonly heroCtaSecondary: Locator;
  readonly heroSocialProof: Locator;

  // Stats bar
  readonly statsSection: Locator;

  // Agents section
  readonly agentsSection: Locator;
  readonly agentCards: Locator;

  // SOSTAC section
  readonly sostacSection: Locator;

  // How it works
  readonly howItWorksSection: Locator;

  // Testimonials
  readonly testimonialsSection: Locator;

  // Pricing teaser
  readonly pricingSection: Locator;
  readonly planCards: Locator;

  // Footer CTA
  readonly footerCta: Locator;

  // Site footer
  readonly siteFooter: Locator;

  constructor(page: Page) {
    this.page = page;

    // Nav — scope to <header> to avoid matching Radix Sheet portal links
    this.navLogo = page.getByRole("link", { name: /NivelatuAcademy/i });
    this.navLoginLink = page.locator("header").getByRole("link", { name: /iniciar sesión/i });
    this.navStartButton = page.locator("header").getByRole("link", {
      name: /empieza gratis/i,
    });

    // Hero — exact badge text avoids matching the SOSTAC section heading
    this.heroBadge = page.getByText("Metodología SOSTAC · 7 Agentes IA");
    this.heroHeading = page.getByRole("heading", {
      name: /lanza tu academia/i,
    }).first();
    this.heroCtaPrimary = page.getByRole("link", {
      name: /empieza tu plan/i,
    });
    this.heroCtaSecondary = page.getByRole("link", {
      name: /ver demostración/i,
    });
    this.heroSocialProof = page.getByText(/200.*academias/i);

    // Sections
    this.statsSection = page.getByText(/academias lanzadas/i).first();
    this.agentsSection = page.getByRole("heading", {
      name: /agentes de IA/i,
    });
    this.agentCards = page.locator("[data-testid='agent-card']");
    this.sostacSection = page.getByRole("heading", {
      name: /Metodología SOSTAC/i,
    });
    this.howItWorksSection = page.getByRole("heading", {
      name: /Cómo funciona/i,
    });
    this.testimonialsSection = page.getByRole("heading", {
      name: /lo que dicen/i,
    });
    this.pricingSection = page.getByRole("heading", {
      name: /elige tu plan/i,
    });
    this.planCards = page.locator("[data-testid='plan-card']");
    this.footerCta = page.getByRole("heading", {
      name: /listo para lanzar/i,
    });
    this.siteFooter = page.getByText(/todos los derechos/i);
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickLogin() {
    await this.navLoginLink.click();
  }

  async clickStartFree() {
    await this.navStartButton.click();
  }

  async scrollToSection(heading: Locator) {
    await heading.scrollIntoViewIfNeeded();
  }
}
