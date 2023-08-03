
/// <reference types="cypress"/>


const elements =
{
    button:
    {
        addToCart: 'input[id="add-to-cart-button"]',
        proceedToBuy: 'input[value="Proceed to checkout"]',
        cart: 'a[id="nav-cart"]',
        close: 'a[id="attach-close_sideSheet-link"]',
        wishList: 'span[id="wishListMainButton"]',
        viewWishList: 'span[id="huc-view-your-list-button"]'
    },

    title:
    {
        productTitle: 'span[id="productTitle"]'
    },

    priceOfAllProduct:
    {
        productPrice: 'p[class="a-spacing-mini"]',
        totalPrice: 'span[id="sc-subtotal-amount-activecart"]'
    }


}
export default class ProductPage {

    addToCart() {
        return cy.get(elements.button.addToCart).click();
    }

    goToCart() {
        return cy.get(elements.button.cart).click();
    }

    getProductPrice() {
        return cy.get(elements.priceOfAllProduct.productPrice);
    }

    getTotalPrice() {
        return cy.get(elements.priceOfAllProduct.totalPrice);
    }

    clickWishList() {
        return cy.get(elements.button.wishList).click();
    }

    getProductTitle() {
        return cy.get(elements.title.productTitle);
    }

    clickViewWishList() {
        return cy.get(elements.button.viewWishList).click();
    }
}