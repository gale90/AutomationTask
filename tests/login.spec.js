import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";
import { readCSV } from "../utils/csvReader.js";

const users = readCSV("data/credentials.csv");

test.beforeEach(async ({ page, logInClass }, testInfo) => {
  logger.info(`Running test: ${testInfo.title}`);
  await logInClass.navigateToSignUpLogin();
  expect(page.url()).toContain("login");
});

test.describe("Login valid tests group", () => {
  test.afterEach(async ({ page, logInClass }) => {
    await logInClass.clickLogout();
    expect(page.url()).toContain("login");
  });

  test(
    "Verify that user can login with correct email and password",
    { tag: ["@loginPage", "@e2e"] },
    async ({ logInClass }) => {
      await logInClass.loginUser(process.env.EMAIL, process.env.PASSWORD);
      expect(await logInClass.userLoggedInMsg()).toContain("Logged in as");
    }
  );
});

test.describe("Login invalid tests group", () => {
  for (const [index, user] of users.entries()) {
    test(
      `Verify that user cannot login with incorrect credentials [${index + 1}]`,
      { tag: "@loginPage" },
      async ({ logInClass }) => {
        await logInClass.loginUser(user.email || "", user.password || "");
        await expect(logInClass.userLoggedInTxt).not.toBeVisible();
      }
    );
  }
});