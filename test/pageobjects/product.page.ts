import { ChainablePromiseElement } from 'webdriverio';
import HomePage from '../pageobjects/home.page';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addToCartButton () {
        return $('//button[text()="Add to Cart"]');
    }

    async clickAddToCartButton() {
        await this.addToCartButton.waitForClickable();
        await this.addToCartButton.click();
    }

    async searchAndOpenProductPage() {
        await HomePage.EnterSearchInput('realme C30');
        await browser.switchWindow('realme C30 ( 32 GB Storage, 2 GB RAM ) Online at Best Price On Flipkart.com');
        
    }

    async addProductToCart() {
        await this.searchAndOpenProductPage();
        await this.validateProductdetailsPage();
        await this.clickAddToCartButton();
    }

    async validateProductdetailsPage() {
        await expect(this.addToCartButton).toBeExisting();
    }
}

export default new ProductPage();
