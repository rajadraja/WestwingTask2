const mainPage = require('../pageobjects/main-page.object');
const mainPageUtil = require('../util/main-page.util');

class MainPageExpect {

    async expectProductListIsDisplayed() {
        await expect(mainPage.productGrid).toBeDisplayed();
    }

    async expectWishlistIsAdded() {
        await expect(mainPage.wishlistCounter).toBeDisplayed();
    }

    async expectWishlistCounterIncreased() {
        await expect(mainPageUtil.getwishlistCount).toEqual('1');
    }

    async expectBlocklistProductIsRemoved(index) {
        await expect(mainPageUtil.removeWishlistProduct(index)).not.toBeDisplayed();
    }


}

module.exports = new MainPageExpect();