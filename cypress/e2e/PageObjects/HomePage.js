/// <reference types="cypress"/>

const elements = {

    button:
    {
        accountHover: 'a[id="nav-link-accountList"]',
        yourAccounts: 'div[id="nav-al-your-account"] span[class="nav-text"]'
    },

    searchFeature:
    {
        searchBox: 'input[id="twotabsearchtextbox"]',
    },
}

export default class HomePage {

    search(product) {
        return cy.get(elements.searchFeature.searchBox).type(product + '{enter}');
    }

    clickBestSellerMenu() {
        return cy.contains('Best Sellers').click();

    }

    hoverOverAccountList() {
        return cy.get(elements.button.accountHover).trigger('mouseover');
    }

    clickWishListFromHomepage() {
        return cy.contains('Your Wish List').click();
    }

    clickYourAccounts() {
        return cy.get(elements.button.yourAccounts).eq(0).click();
    }
}
