import { BasePage } from "./basePage.js";

export class Products extends BasePage {
  constructor(page) {
    super(page);

    this.page = page;
    this.viewProducts = page.locator("div.choose li");
    this.productNameTxt = page.locator("div.product-information > h2");
    this.productCategoryTxt = page.locator(
      'div.product-information > p:has-text("Category:")'
    );
    this.productPriceTxt = page.locator(
      "div.product-information > span > span"
    );
    this.productAvailabilityTxt = page.locator(
      'div.product-information > p b:has-text("Availability:")'
    );
    this.productConditionTxt = page.locator(
      'div.product-information > p b:has-text("Condition:")'
    );
    this.productBrandTxt = page.locator(
      'div.product-information > p b:has-text("Brand:")'
    );
    this.searchField = page.locator("input#search_product");
    this.searchBtn = page.locator("button#submit_search");
    this.searchedProductNamesList = page.locator("div.productinfo > p");
  }

  async clickOnFirstProduct() {
    await this.viewProducts.first().click();
  }

  async enterProduct(product) {
    await this.searchField.type(product);
  }

  async clickOnSearch() {
    await this.searchBtn.click();
  }

  async searchProduct(product) {
    await this.enterProduct(product);
    await this.clickOnSearch();
  }

  async getProductsList() {
    return await this.searchedProductNamesList.allTextContents();
  }
}