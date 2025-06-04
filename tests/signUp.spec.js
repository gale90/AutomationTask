import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";
import {
  generateRandomName,
  generateRandomDay,
  generateRandomMonth,
  generateRandomYear,
  generateRandomCountry,
  generateUserData,
} from "../utils/randomGenerator.js";

let rndName;
let rndEmail;

test.beforeEach(async ({ page, signUpClass }, testInfo) => {
  logger.info(`Running test: ${testInfo.title}`);
  rndName = generateRandomName();
  rndEmail = `${rndName}@automationexercise.com`;
  await page.goto("/");
  await signUpClass.navigateToSignUpLogin();
});

test.describe("Signup tests group", () => {
  test(
    "Verify that new user can be registered",
    { tag: ["@signUpPage", "@e2e"] },
    async ({ page, signUpClass }) => {
      const user = generateUserData();

      expect(page.url()).toContain("login");

      await signUpClass.fillNewUserSignUp(rndName, rndEmail);

      expect(page.url()).toContain("signup");
      expect(await signUpClass.enterAccInfoTitle()).toBeVisible();

      await signUpClass.fillUserInfo(
        user.password,
        user.firstName,
        user.lastName,
        user.company,
        user.address,
        generateRandomCountry(),
        user.state,
        user.city,
        user.zip,
        user.phone
      );

      await signUpClass.selectBirthDate(
        generateRandomDay(),
        generateRandomMonth(),
        generateRandomYear()
      );

      await signUpClass.checkNewsletterCB();
      await signUpClass.checkSpecialOffersCB();

      await signUpClass.clickCreateAccount();
      expect(page.url()).toContain("account_created");
      expect(await signUpClass.accountCreatedTitle()).toContain("ACCOUNT CREATED!");
      await signUpClass.clickContinueBtn();
      expect(await signUpClass.userLoggedInMsg()).toContain(`Logged in as ${rndName}`);
      await signUpClass.clickDeleteAcc();
      expect(await signUpClass.accountDeletedTitle()).toBeVisible();
      await signUpClass.clickContinueBtn();
    }
  );

  test(
    "Verify that user cannot be registered with existing email",
    { tag: ["@signUpPage", "@e2e"] },
    async ({ page, signUpClass }) => {
      expect(page.url()).toContain("login");
      
      await signUpClass.fillNewUserSignUp(rndName, process.env.EMAIL);
      await expect(await signUpClass.existingEmailValidation()).toBeVisible();
    }
  );
});