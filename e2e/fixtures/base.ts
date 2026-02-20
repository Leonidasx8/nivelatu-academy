import { test as base, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Custom test fixtures extending Playwright's base test.
 *
 * Provides:
 * - makeAxeBuilder: Pre-configured accessibility scanner (WCAG 2.1 AA)
 * - assertNoA11yViolations: Convenience helper for a11y assertions
 */

type CustomFixtures = {
  makeAxeBuilder: () => AxeBuilder;
  assertNoA11yViolations: (options?: {
    exclude?: string[];
    disableRules?: string[];
  }) => Promise<void>;
};

export const test = base.extend<CustomFixtures>({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .exclude(".stagger-children"); // Animated elements can cause false positives

    await use(makeAxeBuilder);
  },

  assertNoA11yViolations: async ({ page }, use) => {
    const assertNoA11yViolations = async (
      options: { exclude?: string[]; disableRules?: string[] } = {}
    ) => {
      let builder = new AxeBuilder({ page }).withTags([
        "wcag2a",
        "wcag2aa",
        "wcag21a",
        "wcag21aa",
      ]);

      if (options.exclude) {
        for (const selector of options.exclude) {
          builder = builder.exclude(selector);
        }
      }

      if (options.disableRules) {
        builder = builder.disableRules(options.disableRules);
      }

      const results = await builder.analyze();

      const violationSummary = results.violations.map((v) => ({
        rule: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length,
        targets: v.nodes.map((n) => n.target).slice(0, 3),
      }));

      expect(
        results.violations,
        `Accessibility violations found:\n${JSON.stringify(violationSummary, null, 2)}`
      ).toEqual([]);
    };

    await use(assertNoA11yViolations);
  },
});

export { expect };
