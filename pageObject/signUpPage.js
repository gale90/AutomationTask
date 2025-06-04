import { LogIn } from "./loginPage.js";

export class SignUp extends LogIn {
  constructor(page) {
    super(page);

    this.page = page;
    this.enterAccInfoTxt = page.locator(
      'h2.title:has-text("Enter Account Information")'
    );
    this.passwordField = page.locator('input#password');
    this.dateDayDD = page.locator('select#days');
    this.dateMonthDD = page.locator('select#months');
    this.dateYearDD = page.locator('select#years');
    this.newsletterCB = page.locator('input#newsletter');
    this.specialOffersCB = page.locator('input#optin');
    this.firstNameField = page.locator('input#first_name');
    this.lastNameField = page.locator('input#last_name');
    this.companyField = page.locator('input#company');
    this.addressField = page.locator('input#address1');
    this.countryDD = page.locator('select#country');
    this.stateField = page.locator('input#state');
    this.cityField = page.locator('input#city');
    this.zipcodeField = page.locator('input#zipcode');
    this.phoneNumberField = page.locator('input#mobile_number');
    this.createAccBtn = page.locator('button[data-qa="create-account"]');
    this.genderCB = page.locator('input#id_gender1');
    this.accountCreatedTxt = page.locator('h2[data-qa="account-created"]');
    this.continueBtn = page.locator('a[data-qa="continue-button"]');
  }

  async enterAccInfoTitle() {
    return await this.enterAccInfoTxt;
  }

  async enterPassword(pass) {
    await this.passwordField.type(pass);
  }

  async selectDay(day) {
    await this.dateDayDD.selectOption(day);
  }

  async selectMonth(month) {
    await this.dateMonthDD.selectOption(month);
  }

  async selectYear(year) {
    await this.dateYearDD.selectOption(year);
  }

  async checkNewsletterCB() {
    await this.newsletterCB.check();
  }

  async checkSpecialOffersCB() {
    await this.specialOffersCB.check();
  }

  async enterFirstName(firstName) {
    await this.firstNameField.type(firstName);
  }

  async enterLastName(lastName) {
    await this.lastNameField.type(lastName);
  }

  async enterCompany(company) {
    await this.companyField.type(company);
  }

  async enterAddress(address) {
    await this.addressField.type(address);
  }

  async selectCountry(country) {
    await this.countryDD.selectOption(country);
  }

  async enterState(state) {
    await this.stateField.type(state);
  }

  async enterCity(city) {
    await this.cityField.type(city);
  }

  async enterZipcode(zip) {
    await this.zipcodeField.type(zip);
  }

  async enterPhoneNumber(phone) {
    await this.phoneNumberField.type(phone);
  }

  async clickCreateAccount() {
    await this.createAccBtn.click();
  }

  async checkGenderCB() {
    await this.genderCB.check();
  }

  async accountCreatedTitle() {
    return await this.accountCreatedTxt.innerText();
  }

  async clickContinueBtn() {
    await this.continueBtn.click();
  }

  async selectBirthDate(day, month, year) {
    await this.selectDay(day);
    await this.selectMonth(month);
    await this.selectYear(year);
  }

  async fillUserInfo(pass, firstName, lastName, company, address, country, state, city, zip, phone) {
    await this.checkGenderCB();
    await this.enterPassword(pass);
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterCompany(company);
    await this.enterAddress(address);
    await this.selectCountry(country);
    await this.enterState(state);
    await this.enterCity(city);
    await this.enterZipcode(zip);
    await this.enterPhoneNumber(phone);
  }
}