export class TestCases {
  constructor(page) {
    this.page = page;
    this.testCasesLink = page.locator('ul.navbar-nav a[href="/test_cases"]');
    this.testCasesList = page.locator('div.panel-group a[data-toggle="collapse"] > u');
    this.testStepsList = page.locator('div#collapse1 > ul.list-group > li.list-group-item');
  }

  async navigateToTestCases() {
    await this.page.goto('/')
    await this.testCasesLink.click()
  }

  async getTestCasesList() {
    return await this.testCasesList.allTextContents();
  }
}
