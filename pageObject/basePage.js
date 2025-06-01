export class BasePage {
    constructor(page) {
        this.signUpLoginLink = page.locator('a[href="/login"]');
        this.testCasesLink = page.locator('ul.navbar-nav a[href="/test_cases"]');
        this.logoutLink = page.locator('a[href="/logout"]');
    }

    async navigateToSignUpLogin() {
        await this.page.goto('/');
        await this.signUpLoginLink.click();
    };

    async navigateToTestCases() {
        await this.page.goto('/');
        await this.testCasesLink.click();
    }

    async clickLogout() {
        await this.logoutLink.click();
    }
}