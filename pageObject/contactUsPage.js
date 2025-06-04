import { BasePage } from "./basePage";
import path from "path";

export class ContactUs extends BasePage {
  constructor(page) {
    super(page);

    this.page = page;
    this.getInTouchTxt = page.locator('h2.title:has-text("Get In Touch")');
    this.nameField = page.locator('input[data-qa="name"]');
    this.emailField = page.locator('input[data-qa="email"]');
    this.subjectField = page.locator('input[data-qa="subject"]');
    this.messageField = page.locator("textarea#message");
    this.uploadFileBtn = page.locator('input[name="upload_file"]');
    this.submitBtn = page.locator('input[type="submit"]');
    this.statusSuccessTxt = page.locator('div.status.alert.alert-success');
  }

  getInTouchTitle() {
    return this.getInTouchTxt;
  }

  async enterName(name) {
    await this.nameField.type(name);
  }

  async enterEmail(email) {
    await this.emailField.type(email);
  }

  async enterSubject(subject) {
    await this.subjectField.type(subject);
  }

  async enterMessage(message) {
    await this.messageField.type(message);
  }

  async uploadFile(dirname, filename) {
    const filePath = path.join(dirname, filename);
    await this.uploadFileBtn.setInputFiles(filePath);
  }

  async clickSubmit() {
    this.submitBtn.click();
  }

  messageSubmittedTxt() {
    return this.statusSuccessTxt;
  }
}