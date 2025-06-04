import { test as base } from "@playwright/test";
import { TestCases } from "../pageObject/testCasesPage";
import { SignUp } from "../pageObject/signUpPage";
import { LogIn } from "../pageObject/loginPage";
import { BasePage } from "../pageObject/basePage";
import { ContactUs } from "../pageObject/contactUsPage";

export const test = base.extend({
  baseClass: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  logInClass: async ({ page }, use) => {
    await use(new LogIn(page));
  },
  signUpClass: async ({ page }, use) => {
    await use(new SignUp(page));
  },
  testCasesClass: async ({ page }, use) => {
    await use(new TestCases(page));
  },
  contactUsClass: async ({ page }, use) => {
    await use(new ContactUs(page));
  },
});

export { expect } from "@playwright/test";