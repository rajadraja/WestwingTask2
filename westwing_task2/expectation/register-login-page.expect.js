const popupLoginRegisterPage = require('../pageobjects/popup-login-registration.object')

class RegisterLoginPageExpect {

    async expectRegisterOrLoginIsDisplayed() {
        await expect(popupLoginRegisterPage.RegisterOrLoginPopUp).toBeDisplayed();
    }
}

module.exports = new RegisterLoginPageExpect();