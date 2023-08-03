/// <reference types="cypress"/>

const elements = {
    listPrice:
    {
        //excludes all :not(div[data-a-expander-name="qna_question_expander"] elements which are present at the bottom and not filtered
        price: 'span[data-a-size="xl"] :not(div[data-a-expander-name="qna_question_expander"] *) [class="a-price-whole"]'
    },

    product:
    {
        bestSellerProduct: 'div[class="p13n-sc-uncoverable-faceout"]',
        //contains target attribute with blank value which needs to be removed
        selectProduct: 'a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]',

    },

    button:
    {
        bookFlightTicket: 'a[id="a-autoid-1-announce"]'
    }

}

export default class ListPage {

    clickUserSelectProduct() {
        return cy.get(elements.product.selectProduct).eq(2).invoke('removeAttr', 'target').click();

    }
    clickAnotherProduct() {
        return cy.get(elements.product.selectProduct).eq(3).invoke('removeAttr', 'target').click();
    }

    clickOneMoreProduct() {
        return cy.get(elements.product.selectProduct).eq(4).invoke('removeAttr', 'target').click();
    }

    clickPriceFilter() {
        return cy.contains('₹10,000 - ₹20,000').click().wait(2000);
    }

    getSortedPriceList() {
        return cy.get(elements.listPrice.price);
    }

    clickBestSellerProduct() {
        return cy.get(elements.product.bestSellerProduct).eq(1).click();
    }

    clickFlightBooking() {
        return cy.get(elements.button.bookFlightTicket).click();
    }
}