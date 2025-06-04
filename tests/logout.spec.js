import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";

test.beforeEach(async ({ page, logInClass }, testInfo) => {
  logger.info(`Running test: ${testInfo.title}`);
  await page.goto("/");
  await logInClass.navigateToSignUpLogin();
  expect(page.url()).toContain("login");
  await logInClass.loginUser(process.env.EMAIL, process.env.PASSWORD);
});

test(
  "Verify that user can logout",
  { tag: ["@loginPage", "@e2e"] },
  async ({ page, baseClass }) => {
    await expect(baseClass.deleteAccLink).toBeVisible();
    await baseClass.clickLogout();
    await expect(baseClass.logoutLink).not.toBeVisible();
    expect(page.url()).toContain("login");
  }
);