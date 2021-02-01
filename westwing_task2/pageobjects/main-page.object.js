class MainPage {
    get cookieButton() {
        return $('.//button[text()="Cookies akzeptieren"]');
    }

    get searchInput() {
        return $('.//input[@data-testid="search-input"]');
    }

    get productGrid() {
        return $('.ProductGrid__StyledGrid-zyj4tq-0');
    }

    get suggestionsList() {
        return $('//div[@data-testid="suggestions"]');
    }

    get wishlistIcon() {
        // let elem; 
        // elem = '(.//*[@class="sc-eCApGN ctxfwR"])[1]';
        return $('(.//div[@data-testid="wishlist-icon"])[1]');
    }

    get wishlistCounter() {
        return $('.//span[@data-testid="wishlist-counter"]');
    }

    blocklistProduct(index) {
        let elem;
        elem = `(.//div[@class ="blockListProduct__details"])[${index}]`;
        return $(elem);
    }

    blockListProductDeleteButton(index) {
        let elem;
        elem = `(.//button[contains(@class,"blockListProduct__delete")])[${index}]`;
        return $(elem);
    }
    
}

module.exports = new MainPage();