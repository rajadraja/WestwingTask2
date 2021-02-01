const mainPageUtil = require('../../util/main-page.util');
const loginRegisterUtil = require('../../util/Login-registration.util')
const mainPageExpect = require('../../expectation/main-page.expect');
const registerLoginExpect = require('../../expectation/register-login-page.expect');
const LoginRegistrationUtil = require('../../util/Login-registration.util');

describe('Given I am on the WestwingNow home page', () => {
    const timeout = 2000;

    before(async () => {
        browser.url('./')
        await browser.pause(timeout);
    });
    describe('When I search for "möbel"', () => {
        before(async () => {
            await mainPageUtil.acceptCookies();
            await loginRegisterUtil.closeShopToClubPopUp();
            await mainPageUtil.enterSearchInput();
        });

        after(async () => {
            await loginRegisterUtil.closeShopToClubPopUp();
        })

        it('Then I should see product listing page with a list of products', async () => {
            await mainPageExpect.expectProductListIsDisplayed();
        });

        describe('When I click on wishlist icon of the first found product', () => {
            before(async () => {
                
                await mainPageUtil.clickWishIcon();
            });

            after(async () => {
                await loginRegisterUtil.closeShopToClubPopUp(false);
                await LoginRegistrationUtil.login();
            });

            it('Then I should see the login/registration overlay', async () => {
                await registerLoginExpect.expectRegisterOrLoginIsDisplayed();
            });
        });

        describe('When I switch to login form of the overlay And I log in with credentials', () => {

            it('Then the product should be added to the wishlist', async () => {
                await mainPageExpect.expectWishlistIsAdded();
                await mainPageExpect.expectWishlistCounterIncreased();
            });
        });

        describe('When I go to the wishlist page And I delete the product from my wishlist', () => {
            before(async () => {
                await browser.url('./customer/wishlist/index/')
                await browser.pause(timeout);
                await mainPageUtil.removeWishlistProduct(1);
            });

            it('Then the block list product is removed', async () => {
                await mainPageExpect.expectBlocklistProductIsRemoved(1);
            })

        });
    });

});