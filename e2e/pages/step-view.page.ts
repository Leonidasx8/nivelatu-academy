import type { Page, Locator } from "@playwright/test";

/**
 * Page Object Model for the Step View page.
 * Route pattern: /academy/[agentId]/[moduleId]/[stepId]
 * Example:       /academy/forge/mision/paso-1
 *
 * Covers the three-panel workspace layout: workspace, chat, and video panels;
 * step title; progress bar; and previous/next navigation buttons.
 */
export class StepViewPage {
  readonly page: Page;

  // Three-panel layout panels
  readonly workspacePanel: Locator;
  readonly chatPanel: Locator;
  readonly videoPanel: Locator;

  // Step metadata
  readonly stepTitle: Locator;
  readonly progressBar: Locator;

  // Navigation buttons
  readonly nextButton: Locator;
  readonly prevButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Panels resolved by data-testid for reliable structural targeting
    this.workspacePanel = page.locator("[data-testid='workspace-panel']");
    this.chatPanel = page.locator("[data-testid='chat-panel']");
    this.videoPanel = page.locator("[data-testid='video-panel']");

    // Step title resolved by heading role
    this.stepTitle = page.getByRole("heading", { level: 1 });

    // Progress bar resolved by ARIA role
    this.progressBar = page.getByRole("progressbar");

    // Navigation buttons resolved by their visible text labels
    this.nextButton = page.getByRole("button", { name: /siguiente/i });
    this.prevButton = page.getByRole("button", { name: /anterior/i });
  }

  /**
   * Navigate to a specific step within a module.
   * @param agentId  - Agent slug, e.g. "forge"
   * @param moduleId - Module slug, e.g. "mision"
   * @param stepId   - Step slug, e.g. "paso-1"
   */
  async goto(agentId: string, moduleId: string, stepId: string) {
    await this.page.goto(`/academy/${agentId}/${moduleId}/${stepId}`);
  }

  async clickNext() {
    await this.nextButton.click();
  }

  async clickPrev() {
    await this.prevButton.click();
  }
}
