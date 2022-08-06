import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get myAccountButton() {
        return $('//div[text()="My Account"]');
    }

    public get logout() {
        return $('//span[text()="Logout"]');
    }

    async validateAccountIsLoggedIn() {
        await expect(this.myAccountButton).toBeExisting();
        await expect(this.myAccountButton).toHaveTextContaining(
            'My Account');
    }

    async logoutAccount() {
       await this.logout.scrollIntoView({behavior: "smooth"});
       await this.logout.click();
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open("/account");
    }
}

export default new ProfilePage();