import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
import HomePage from '../pageobjects/home.page';
import ProductPage from '../pageobjects/product.page';
import ViewCartPage from '../pageobjects/view.cart';

describe('My Login application and product cart', () => {

    it('should flipkart login and logout with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('id', 'password');
        await ProfilePage.validateAccountIsLoggedIn();
    });

    it('open product details page', async () => {
        await HomePage.open();
        await ProductPage.searchAndOpenProductPage();
        await ProductPage.validateProductdetailsPage();
    })

    it('Search for product in homepage and add it to cart', async () => {
        await HomePage.open();
        await ProductPage.addProductToCart();
        await ViewCartPage.validateViewCartScreen();
        await ViewCartPage.removeItemFromCart();
        await ViewCartPage.validateNoItemInCart();
        await ProfilePage.open();
        await HomePage.open();
    })
});


