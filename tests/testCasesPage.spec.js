import testCasesList from "../data/testCasesList.json";
import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";

test.beforeEach(async ({ testCasesClass }) => {
  await testCasesClass.navigateToTestCases();
});

test.describe.parallel("Test Cases tests group", () => {
  test(
    "Verify all of the test cases are displayed on the page",
    { tag: ["@testCasesPage", "@e2e"] },
    async ({ page, testCasesClass }) => {
      expect(page.url()).toContain("test_cases");

      const testCasesOnPage = await testCasesClass.getTestCasesList();

      testCasesList.testCases.forEach((testCase) => {
        expect(testCasesOnPage).toContain(testCase);
        logger.info(`Checking: ${testCase}`);
      });
    }
  );

  test(
    "Verify that each Test Case can be expanded",
    { tag: "@testCasesPage" },
    async ({ testCasesClass }) => {
      const count = await testCasesClass.testCasesList.count();

      for (let i = 0; i < count; i++) {
        const testCaseElement = testCasesClass.testCasesList.nth(i);
        const text = await testCaseElement.innerText();

        logger.info(`Clicking accordion: ${text}`);
        await testCaseElement.click();

        const stepCount = await testCasesClass.testStepsList.count();
        expect(stepCount).toBeGreaterThan(0);

        await testCaseElement.click();
      }
    }
  );
});
