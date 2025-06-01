import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";

test.beforeEach(async ({ page, logInClass }, testInfo) => {
    logger.info(`Running test: ${testInfo.title}`);
    await logInClass.navigateToSignUpLogin();
    expect(page.url()).toContain("login");
    await logInClass.loginUser(process.env.EMAIL, process.env.PASSWORD);
});

test.describe("Logout tests group", () => {
    test(
        "Verify that user can logout",
        { tag: ["@loginPage", "@e2e"] },
        async ({ baseClass }) => {
            await baseClass.clickLogout();
            await expect(baseClass.logoutLink).not.toBeVisible();
        }
    )
});