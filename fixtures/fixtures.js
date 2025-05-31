import { test as base } from "@playwright/test";
import { TestCases } from "../pageObject/testCasesPage";

export const test = base.extend({
  testCasesClass: async ({ page }, use) => {
    await use(new TestCases(page));
  },
});

export { expect } from "@playwright/test";
