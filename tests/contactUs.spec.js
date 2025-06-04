import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";
import { faker } from "@faker-js/faker";
import { removeAds, acceptDialogs } from "../utils/helpers.js";

test(
  "Verify that a user can successfully submit the contact us form",
  { tag: ["@contactUsPage", "@e2e"] },
  async ({ page, contactUsClass }, testInfo) => {
    logger.info(`Running test: ${testInfo.title}`);
    await contactUsClass.navigateToContactUs();
    expect(page.url()).toContain("contact_us");
    await expect(contactUsClass.getInTouchTitle()).toBeVisible();
    await contactUsClass.enterName(faker.person.fullName());
    await contactUsClass.enterEmail(faker.internet.email());
    await contactUsClass.enterSubject(faker.lorem.sentences(1));
    await contactUsClass.enterMessage(faker.lorem.sentences(3));
    await contactUsClass.uploadFile("../AutomationTask/data", "testCases.json");
    await removeAds(page);
    await contactUsClass.clickSubmit();
    await acceptDialogs(page);
    await expect(contactUsClass.messageSubmittedTxt()).toContainText("Success! Your details have been submitted successfully.");
    await contactUsClass.navigateToHome();
    expect(page.url()).toBe("https://www.automationexercise.com/");
  }
);