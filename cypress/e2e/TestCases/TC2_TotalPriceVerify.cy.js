import HomePage from "../PageObjects/HomePage";
import ListPage from "../PageObjects/ListPage";
import ProductPage from "../PageObjects/ProductPage";

const homePage = new HomePage();
const productpage = new ProductPage();
const listpage= new ListPage();
describe("Total Price Check", () => {
  beforeEach(() => {
    cy.visitAmazon();
  });

  it("Verify the total prices of product in the cart", () => {
    var totalProductPrice = 0.0;
    var productPrice = 0.0;
    var totalPrice;

    homePage.search("Shoes for men");
    listpage.clickUserSelectProduct();
    productpage.addToCart();
    cy.go('back');
    cy.go('back');
    listpage.clickAnotherProduct();
    productpage.addToCart();
    cy.go('back');
    cy.go('back');
    listpage.clickOneMoreProduct();
    productpage.addToCart();
    productpage.goToCart();
    productpage.getProductPrice().each((text) => {
      cy.wrap(text).invoke('text').then((text2) => {
        productPrice = parseFloat(text2.replace(",", ""));
        totalProductPrice = totalProductPrice + productPrice;
      })
    })
    productpage.getTotalPrice().invoke('text').then((text1) => {
      totalPrice = parseFloat(text1.replace(",", ""));
      expect(totalProductPrice).to.equal(totalPrice);
    })
  })
})