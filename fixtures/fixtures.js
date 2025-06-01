import { test as base } from "@playwright/test";
import { TestCases } from "../pageObject/testCasesPage";
import { SignUp } from "../pageObject/signUpPage";
import { LogIn } from "../pageObject/loginPage";
import { BasePage } from "../pageObject/basePage"

export const test = base.extend({
  baseClass: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  testCasesClass: async ({ page }, use) => {
    await use(new TestCases(page));
  },
  logInClass: async ({ page }, use) => {
    await use(new LogIn(page));
  },
  signUpClass: async ({ page }, use) => {
    await use(new SignUp(page));
  },
});

export { expect } from "@playwright/test";
