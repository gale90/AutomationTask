import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";


test(
    "Verify that user can login with correct email and password",
    { tag: ["@loginPage", "@e2e"] },
    async ({ page, logInClass }, testInfo) => {
        logger.info(`Running test: ${testInfo.title}`);
        await logInClass.navigateToSignUpLogin();
        expect(page.url()).toContain("login");
        await logInClass.loginUser(process.env.EMAIL, process.env.PASSWORD);
        expect(await logInClass.userLoggedInMsg()).toContain('Logged in as');
    });