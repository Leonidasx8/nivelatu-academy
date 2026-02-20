import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the SOSTAC Hub page (/academy).
 * Covers the interactive agent map with clickable agent nodes.
 */
export class SostacHubPage {
  readonly page: Page;

  // Generic map nodes collection
  readonly mapNodes: Locator;

  // Individual agent nodes resolved by agent name text
  readonly delfino: Locator;
  readonly forge: Locator;
  readonly orlando: Locator;
  readonly fernando: Locator;
  readonly tavo: Locator;
  readonly carla: Locator;
  readonly ivan: Locator;

  constructor(page: Page) {
    this.page = page;

    // All interactive map nodes (data-testid used for reliable collection queries)
    this.mapNodes = page.locator("[data-testid='agent-node']");

    // Individual agent nodes resolved by their visible name text
    this.delfino = page.getByText(/^delfino$/i);
    this.forge = page.getByText(/^forge$/i);
    this.orlando = page.getByText(/^orlando$/i);
    this.fernando = page.getByText(/^fernando$/i);
    this.tavo = page.getByText(/^tavo$/i);
    this.carla = page.getByText(/^carla$/i);
    this.ivan = page.getByText(/^ivan$/i);
  }

  async goto() {
    await this.page.goto("/academy");
  }

  /**
   * Click an agent node by its name.
   * @param name - One of: Delfino, Forge, Orlando, Fernando, Tavo, Carla, Ivan
   */
  async clickAgent(name: string) {
    await this.page.getByText(new RegExp(`^${name}$`, "i")).click();
  }
}
