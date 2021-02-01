const mainPage = require('../pageobjects/main-page.object')
const popupLoginRegisterPage = require('../pageobjects/popup-login-registration.object')

class MainPageUtil {

    async acceptCookies() {
        (await mainPage.cookieButton).waitForDisplayed();
        if ((await mainPage.cookieButton).isDisplayed()) {
            (await mainPage.cookieButton).click();
        }
    }

    async clickSearchInput() {
        (await mainPage.searchInput).click();
    }

    async enterSearchInput() {
        (await mainPage.searchInput).click();
        (await mainPage.searchInput).setValue('möbel');
        (await mainPage.suggestionsList).waitForDisplayed();
        await browser.pause(1000);
        // (await mainPage.searchInput).click();
        await browser.keys('Enter');
    }

    async clickWishIcon() {
        (await mainPage.wishlistIcon).waitForClickable();
        (await mainPage.wishlistIcon).click();
    }

    async getwishlistCount() {
        (await mainPage.wishlistCounter).waitForClickable();
        return (await mainPage.wishlistCounter).getText();
    }

    async clickWishlistCounter() {
        (await mainPage.wishlistCounter).click();
    }

    async removeWishlistProduct(index) {
        (await mainPage.blockListProductDeleteButton(index)).waitForDisplayed();
        (await mainPage.blockListProductDeleteButton(index)).click();
    }
}

module.exports = new MainPageUtil();