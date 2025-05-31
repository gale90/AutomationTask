import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";
import { generateRandomName, generateRandomDay, generateRandomMonth, generateRandomYear, generateRandomCountry, generateUserData } from "../utils/rndGenerator.js";

let rndName;
let rndEmail;

test.beforeEach(async ({ signUpClass }, testInfo) => {
  logger.info(`Running test: ${testInfo.title}`);
  rndName = generateRandomName();
  rndEmail = `${rndName}@automationexercise.com`;
  await signUpClass.navigateToSignUp();
});

test.describe("Signup tests group", () => {
  test(
    "Verify that new user can be registered",
    { tag: ["@signUpPage", "@e2e"] },
    async ({ page, signUpClass }) => {
      const user = generateUserData();

      expect(page.url()).toContain("login");
      logger.info(`Name: ${rndName}`);
      logger.info(`Email: ${rndEmail}`);
      await signUpClass.fillNewUserSignUp(rndName, rndEmail);
      expect(page.url()).toContain("signup");
      await signUpClass.checkMrCB();
      await signUpClass.enterPassword(user.password);
      await signUpClass.selectBirthDate(generateRandomDay().toString(), generateRandomMonth().toString(), generateRandomYear().toString());
      await signUpClass.enterFirstName(user.firstName);
      await signUpClass.enterLastName(user.lastName);
      await signUpClass.enterCompany(user.company);
      await signUpClass.enterAddress(user.address);
      await signUpClass.selectCountry(generateRandomCountry());
      await signUpClass.enterState(user.state);
      await signUpClass.enterCity(user.city);
      await signUpClass.enterZipcode(user.zip);
      await signUpClass.enterPhoneNumber(user.phone);
      await signUpClass.clickCreateAccount();
      expect(page.url()).toContain("account_created");
      expect(await signUpClass.accountCreatedTitle()).toContain('ACCOUNT CREATED!');
    }
  );

  test(
    "Verify that user cannot be registered with existing email",
    { tag: ["@signUpPage", "@e2e"] },
    async ({ page, signUpClass }) => {
      expect(page.url()).toContain("login");
      logger.info(`Name: ${rndName}`);
      logger.info(`Email: ${rndEmail}`);
      await signUpClass.fillNewUserSignUp(rndName, process.env.EMAIL);
      await expect(await signUpClass.existingEmailValidation()).toBeVisible();
    }
  );
});
