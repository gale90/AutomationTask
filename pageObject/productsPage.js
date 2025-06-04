import { BasePage } from './basePage.js';

export class Products extends BasePage {
  constructor(page) {
    super(page);

    this.page = page;
    this.viewProducts = page.locator('div.choose li');
    this.productNameTxt = page.locator('div.product-information > h2');
    this.productCategoryTxt = page.locator('div.product-information > p:has-text("Category:")');
    this.productPriceTxt = page.locator('div.product-information > span > span');
    this.productAvailabilityTxt = page.locator('div.product-information > p b:has-text("Availability:")');
    this.productConditionTxt = page.locator('div.product-information > p b:has-text("Condition:")');
    this.productBrandTxt = page.locator('div.product-information > p b:has-text("Brand:")');

  }

  async clickOnFirstProduct() {
    await this.viewProducts.first().click();
  }
}