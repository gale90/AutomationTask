export class LogIn {
    constructor(page) {
        this.page = page;
        this.signUpLink = page.locator('a[href="/login"]');
        this.nameField = page.locator('input[name="name"]');
        this.emailField = page.locator('div.signup-form input[name="email"]');
        this.signUpBtn = page.locator('button[data-qa="signup-button"]');
        this.existingEmailTxt = page.locator('p:has-text("Email Address already exist!")');
    }

    async navigateToSignUp() {
        await this.page.goto('/');
        await this.signUpLink.click();
    };

    async enterName(name) {
        await this.nameField.type(name);
    }

    async enterEmail(email) {
        await this.emailField.type(email);
    }

    async clickSignUpBtn() {
        await this.signUpBtn.click();
    }

    async existingEmailValidation() {
        return await this.existingEmailTxt;
    }

    async fillNewUserSignUp(name, email) {
        await this.enterName(name);
        await this.enterEmail(email);
        await this.clickSignUpBtn();
    }
}