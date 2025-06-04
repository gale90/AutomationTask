import { test, expect } from "../fixtures/fixtures.js";
import logger from "../utils/logger.js";

test.beforeEach(async ({ page, productsClass }, testInfo) => {
  logger.info(`Running test: ${testInfo.title}`);
  await page.goto("/");
  await productsClass.navigateToProducts();
  expect(page.url()).toContain("products");
});

test.describe("Products tests group", () => {
  test(
    "Verify that a user can view a product",
    { tag: ["@productsPage", "@e2e"] },
    async ({ page, productsClass }) => {
      await productsClass.clickOnFirstProduct();
      expect(page.url()).toContain("product_details");
      await expect.soft(productsClass.productNameTxt).toBeVisible();
      await expect.soft(productsClass.productCategoryTxt).toBeVisible();
      await expect.soft(productsClass.productPriceTxt).toBeVisible();
      await expect.soft(productsClass.productAvailabilityTxt).toBeVisible();
      await expect.soft(productsClass.productConditionTxt).toBeVisible();
      await expect.soft(productsClass.productBrandTxt).toBeVisible();
    }
  );

  test(
    "Verify that a user can search for a product",
    { tag: ["@productsPage", "@e2e"] },
    async ({ page, productsClass }) => {
      await productsClass.searchProduct("jeans");
      const products = await productsClass.getProductsList();
      for (const productText of products) {
        expect(productText.toLowerCase()).toContain("jeans");
      }
    }
  );
});
