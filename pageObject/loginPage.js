import { BasePage } from './basePage.js';

export class LogIn extends BasePage {
    constructor(page) {
        super(page);

        this.page = page;
        this.nameField = page.locator('input[name="name"]');
        this.signUpEmailField = page.locator('div.signup-form input[name="email"]');
        this.signUpBtn = page.locator('button[data-qa="signup-button"]');
        this.existingEmailTxt = page.locator('p:has-text("Email Address already exist!")');
        this.loginEmailField = page.locator('input[data-qa="login-email"]');
        this.loginPasswordField = page.locator('input[data-qa="login-password"]');
        this.loginBtn = page.locator('button[data-qa="login-button"]');
        this.userLoggedInTxt = page.locator('//i[@class="fa fa-user"]/parent::a');
    }

    async enterName(name) {
        await this.nameField.type(name);
    }

    async enterSignUpEmail(email) {
        await this.signUpEmailField.type(email);
    }

    async clickSignUpBtn() {
        await this.signUpBtn.click();
    }

    async existingEmailValidation() {
        return await this.existingEmailTxt;
    }

    async enterLoginEmail(email) {
        await this.loginEmailField.type(email);
    }

    async enterLoginPassword(pass) {
        await this.loginPasswordField.type(pass);
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }

    async userLoggedInMsg() {
        return await this.userLoggedInTxt.innerText();
    }

    async loginUser(email, pass) {
        await this.enterLoginEmail(email);
        await this.enterLoginPassword(pass);
        await this.clickLoginBtn();
    }

    async fillNewUserSignUp(name, email) {
        await this.enterName(name);
        await this.enterSignUpEmail(email);
        await this.clickSignUpBtn();
    }
}