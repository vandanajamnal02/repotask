import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchInput () {
        return $('input[title="Search for products, brands and more"]');
    }

    public get getFirstProduct () {
        return $("(//*[contains(text(),'realme C30')])[2]");
    }

    public async  selectFirstProduct(){
        await this.getFirstProduct.waitForDisplayed();
        await this.getFirstProduct.click();
    }

    public async EnterSearchInput(inputText : string) {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(inputText);
        await browser.keys('\uE006');
        await this.selectFirstProduct();
    }


    public open () {
        return super.open('/');
    }
}

export default new HomePage();
