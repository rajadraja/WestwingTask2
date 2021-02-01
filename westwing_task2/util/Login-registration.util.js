const popupLoginRegisterPage = require('../pageobjects/popup-login-registration.object')
const testData = require('../data/testdata.json')

class LoginRegistrationUtil {

    async login() {
        await this.switchToLoginFromRegistration();
        (await popupLoginRegisterPage.emailInput).waitForDisplayed();
        (await popupLoginRegisterPage.emailInput).click();
        (await popupLoginRegisterPage.emailInput).setValue(testData.username);
        (await popupLoginRegisterPage.passwordInput).click();
        (await popupLoginRegisterPage.passwordInput).setValue(testData.password);
        (await popupLoginRegisterPage.loginButton).waitForClickable();
        (await popupLoginRegisterPage.loginButton).click();
    }

    async closeShopToClubPopUp(closeAllPopUp = true) {
        (await popupLoginRegisterPage.shopToClubPopUp).waitForDisplayed();
        if ((await popupLoginRegisterPage.shopToClubPopUp).isDisplayed()) {
            (await popupLoginRegisterPage.offerPopUpLink).click();
            if (closeAllPopUp) {
                (await popupLoginRegisterPage.loginCloseButton).click();
            }
        }
    }

    async switchToLoginFromRegistration() {
        (await popupLoginRegisterPage.regiterNowBUtton).waitForClickable();
        if((await popupLoginRegisterPage.regiterNowBUtton).isDisplayed()) {
            (await popupLoginRegisterPage.regiterNowBUtton).click();
        }
    }

}

module.exports = new LoginRegistrationUtil();