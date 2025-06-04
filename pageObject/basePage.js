export class BasePage {
  constructor(page) {
    this.signUpLoginLink = page.locator('a[href="/login"]');
    this.testCasesLink = page.locator('ul.navbar-nav a[href="/test_cases"]');
    this.userLoggedInTxt = page.locator('//i[@class="fa fa-user"]/parent::a');
    this.logoutLink = page.locator('a[href="/logout"]');
    this.deleteAccLink = page.locator('a[href="/delete_account"]');
    this.accountDeletedTxt = page.locator('h2[data-qa="account-deleted"]');
    this.contactUsLink = page.locator('a[href="/contact_us"]');
    this.homeLink = page.locator("a > i.fa-home");
    this.productsLink = page.locator('a[href="/products"]');
  }

  async navigateToSignUpLogin() {
    await this.signUpLoginLink.click();
  }

  async navigateToTestCases() {
    await this.testCasesLink.click();
  }

  async userLoggedInMsg() {
    return await this.userLoggedInTxt.innerText();
  }

  async clickLogout() {
    await this.logoutLink.click();
  }

  async clickDeleteAcc() {
    await this.deleteAccLink.click();
  }

  async accountDeletedTitle() {
    return await this.accountDeletedTxt;
  }

  async navigateToContactUs() {
    await this.contactUsLink.click();
  }

  async navigateToHome() {
    await this.homeLink.click();
  }

  async navigateToProducts() {
    await this.productsLink.click();
  }
}