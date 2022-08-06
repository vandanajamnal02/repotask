import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ViewCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get priceDetails() {
        return $('//span[text()="Price details"]');
    }

    public get productInfoInCart() {
        return $('//a[text()="realme C30 (Denim Black, 32 GB)"]');
    }

    public get removeItem() {
        return $('//div[text()="Remove"]');
    }

    public get confirmRemoval() {
        return $('(//div[text()="Remove"])[1]');
    }

    public get cartIsEmpty() {
        return $('//div[text()="Your cart is empty!"]');
    }

    public open () {
        return super.open("/viewcart");
    }

    async removeItemFromCart(){
        await this.removeItem.waitForClickable();
        await this.removeItem.scrollIntoView({behavior: "smooth"});
        await this.removeItem.click();
        await this.confirmRemoval.waitForDisplayed();
        await this.confirmRemoval.click();
    }

    async validateViewCartScreen() {
        await expect(this.priceDetails).toHaveTextContaining('PRICE DETAILS');
    }

    async validateNoItemInCart() {
        await expect(await this.cartIsEmpty).toBeExisting();
    }
}

export default new ViewCartPage();
