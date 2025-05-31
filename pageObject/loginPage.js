import creds from "../data/creds";

export class Login {
    constructor(page) {
      this.page = page;
      this.signInBtn = page.locator('a:has-text("Sign In")')
      this.emailField = page.locator('#email')
      this.passwordField = page.locator('#passwd')
      this.loginBtn = page.locator('#SubmitLogin')
    }
  
    async navigateToHomepage() {
        await this.page.goto('/')
    };

    async clickSignInButton() {
        await this.signInBtn.click()
    }

    async clickLogInButton() {
        await this.loginBtn.click()
    }

    async enterEmail() {
        await this.emailField.type(creds.email)
    }

    async enterPassword() {
        await this.passwordField.type(creds.password)
    }

    async loginUser(){
        await this.clickSignInButton()
        await this.enterEmail()
        await this.enterPassword()
        await this.clickLogInButton()
    }

}
  