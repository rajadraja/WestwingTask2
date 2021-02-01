class OfferRegistrationPage {
    get offerPopUpLink() {
        return $('.//button[@data-testid="login-button"]');
    }

    get loginCloseButton() {
        return $('.//button[@data-identifier="LOGIN_AND_REGISTER"]');
    }

    get productGrid() {
        return $('.ProductGrid__StyledGrid-zyj4tq-0');
    }

    get RegisterOrLoginPopUp() {
        return $('.//div[contains(@class,"LoginAndRegisterPopUp")]');
    }
    
    get shopToClubPopUp() {
        return $('.//div[@data-testid="shop-to-club-popup-wrapper"]')
    }

    get emailInput() {
        return $('.//input[@name="email"]');
    }

    get passwordInput() {
        return $('.//input[@name="password"]');
    }

    get termsAndConditionCheckbox() {
        return $('.//input[@name="isTermsAccepted"]');
    }

    get loginButton() {
        return $('.//button[@data-testid="login_reg_submit_btn"]');
    }

    get regiterNowBUtton() {
        return $('.//button[text()= "Jetzt anmelden"]');
    }

    get loginHereButton() {
        return $('.//button[text()= "Hier einloggen"]');
    }

    get loginRegisterSwitchButton() {
        return $('.//button[@data-testid="login_reg_switch_btn"]');
    }
}

module.exports = new OfferRegistrationPage();