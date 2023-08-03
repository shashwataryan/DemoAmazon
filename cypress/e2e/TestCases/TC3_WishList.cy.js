import HomePage from "../PageObjects/HomePage";
import ListPage from "../PageObjects/ListPage";
import ProductPage from "../PageObjects/ProductPage";
import SignInPage from "../PageObjects/SignInPage";
import WishListPage from "../PageObjects/WishListPage";


const homepage = new HomePage();
const listpage = new ListPage();
const productpage = new ProductPage();
const wishlist = new WishListPage();
const signin = new SignInPage();

describe("WishList", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Modify the behavior here
            return false; // This will prevent the test from failing
        });
    });
    
    it("Verify the product added to the wishlist", () => {

        homepage.clickBestSellerMenu();

        listpage.clickBestSellerProduct();
        productpage.getProductTitle().invoke('text').then((text) => {
            productpage.clickWishList();
            cy.signInCustom();
            productpage.clickWishList();
            productpage.clickViewWishList();
            wishlist.getWishListProductTitle().invoke('text').then((text1) => {
                expect(text1.trim()).to.equal(text.trim());
            })

        });
    });


    it("Verify the product deleted from the wishlist", () => {

        signin.clickSignInButton();
        cy.signInCustom();
        homepage.hoverOverAccountList();
        homepage.clickWishListFromHomepage();

        wishlist.getWishListProductTitle().invoke('text').then((text) => {
            wishlist.deleteProductFromWishList();
            wishlist.deletedProductFromWishList().invoke('text').then((text1) => {
                expect(text1.trim()).to.equal(text.trim());

                wishlist.confirmProductDeletion().invoke('text').should('contain', 'Deleted');
            });
        });

    });
});
