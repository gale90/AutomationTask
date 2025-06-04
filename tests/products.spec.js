import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";

test(
  "Verify that a user can view a product",
  { tag: ["@productsPage", "@e2e"] },
  async ({ page, productsClass }, testInfo) => {
    logger.info(`Running test: ${testInfo.title}`);
    await page.goto("/");
    await productsClass.navigateToProducts();
    expect(page.url()).toContain("products");
    await productsClass.clickOnFirstProduct();
    expect(page.url()).toContain("product_details");

    await expect(productsClass.productNameTxt).toBeVisible();
    await expect(productsClass.productCategoryTxt).toBeVisible();
    await expect(productsClass.productPriceTxt).toBeVisible();
    await expect(productsClass.productAvailabilityTxt).toBeVisible();
    await expect(productsClass.productConditionTxt).toBeVisible();
    await expect(productsClass.productBrandTxt).toBeVisible();
  }
);