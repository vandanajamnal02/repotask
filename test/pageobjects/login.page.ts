import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get loginButton() {
        return $('//a[text()="Login"]');
    }

    public get inputUsername () {
        return $('(//input[@type="text"])[2]');
    }

    public get inputPassword () {
        return $('(//input[@type="password"])');
    }

    public get btnSubmit () {
        return $('(//button[@type="submit"])[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await (await this.loginButton).waitForClickable();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/login');
    }
}

export default new LoginPage();
