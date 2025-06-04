import testCases from "../data/testCases.json";
import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";

test.beforeEach(async ({ page, testCasesClass }, testInfo) => {
  logger.info(`Running test: ${testInfo.title}`);
  await page.goto("/");
  await testCasesClass.navigateToTestCases();
});

test.describe.parallel("Test Cases tests group", () => {
  test(
    "Verify all of the test cases are displayed on the page",
    { tag: ["@testCasesPage", "@e2e"] },
    async ({ page, testCasesClass }) => {
      expect(page.url()).toContain("test_cases");

      const testCasesOnPage = await testCasesClass.getTestCasesList();

      for (const testCase of testCases.testCasesList) {
        expect(testCasesOnPage, `Missing test case: ${testCase}`).toContain(testCase);
        logger.info(`Checking: ${testCase}`);
      }
    }
  );

  test(
    "Verify that each Test Case can be expanded",
    { tag: "@testCasesPage" },
    async ({ testCasesClass }) => {
      const count = await testCasesClass.testCasesList.count();

      for (let i = 0; i < count; i++) {
        const testCaseElement = testCasesClass.testCasesList.nth(i);
        const testCaseText = await testCaseElement.innerText();
        logger.info(`Clicking accordion: ${testCaseText}`);

        await testCaseElement.click();

        const isExpanded = await testCaseElement.evaluate(
          element => !element.classList.contains("collapsed")
        );
        expect(isExpanded).toBe(true);
      }
    }
  );
});