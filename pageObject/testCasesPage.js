import { BasePage } from './basePage.js';

export class TestCases extends BasePage {
  constructor(page) {
    super(page);

    this.page = page;
    this.testCasesList = page.locator('div.panel-group a[data-toggle="collapse"] > u');
    this.testStepsList = page.locator('div#collapse1 > ul.list-group > li.list-group-item');
  }

  async getTestCasesList() {
    return await this.testCasesList.allTextContents();
  }
}