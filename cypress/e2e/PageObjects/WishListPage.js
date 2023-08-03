/// <reference types="cypress"/>


const elements =
{
    title:
    {
        wishListProductTitle: 'a[id*="itemName"]'
    },
    delete:
    {
        deleteFromWishlist: 'span[id*="delete-button"]'
    },
    deletedItem:
    {
        productDeleted: 'div[class="a-row a-spacing-none"]',
        deleteConfirmation: 'div[class="a-row a-spacing-none"] div[class="a-alert-content"]'
    }
}

export default class WishListPage {
    getWishListProductTitle() {
        return cy.get(elements.title.wishListProductTitle).eq(0);
    }

    deleteProductFromWishList() {
        return cy.get(elements.delete.deleteFromWishlist).eq(0).click();
    }

    deletedProductFromWishList() {
        return cy.get(elements.deletedItem.productDeleted).eq(0);
    }

    confirmProductDeletion() {
        return cy.get(elements.deletedItem.deleteConfirmation);
    }
}