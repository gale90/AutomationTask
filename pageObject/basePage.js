import products from "../data/products";

export class BasePage {
    constructor(page) {
      this.page = page;
      this.searchField = page.locator("#search_query_top")
      this.firstSuggestionResult = page.locator("div.ac_results > ul > li.ac_even:nth-of-type(1)")
      this.shoppingCartBtn = page.getByTitle('View my shopping cart')
    }
  

    async enterProductNameInSearchField() {
        await this.searchField.click()
        await this.searchField.type(products.inStockProduct)
    }
   
    async clickFirstSuggestion() {
        await this.firstSuggestionResult.click()
    }

    async clickShoppingCartButton() {
        await this.shoppingCartBtn.click()
    }

    async searchForProduct() {
        await this.enterProductNameInSearchField()
        await this.clickFirstSuggestion()
    }


}
  