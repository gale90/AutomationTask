export class BasePage {
    constructor(page) {
        this.logoutLink = page.locator('a[href="/logout"]');
    }

    async clickLogout() {
        await this.logoutLink.click();
    }
}