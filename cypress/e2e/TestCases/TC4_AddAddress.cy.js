import AddressPage from "../PageObjects/AddressPage";
import HomePage from "../PageObjects/HomePage";
import SignInPage from "../PageObjects/SignInPage";

const signin = new SignInPage();
const homepage = new HomePage();
const address = new AddressPage();

describe("Delivery Address", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });
    it("Add delivery address", () => {
        signin.clickSignInButton();
        cy.signInCustom();
        homepage.hoverOverAccountList();
        homepage.clickYourAccounts();
        address.clickYourAddress();
        address.clickAddAddress();
        cy.wait(3000);
        address.enterFullName("Shashwat Aryan");
        address.enterMobileNumner("9876543210");
        address.enterPinCode("831001");
        address.enterAddress("118 KD Flats, C.H.Area");
        address.clickAddAddressButton();
        address.verifyAddressSaved().invoke('text').should('contain', 'Address saved');
    })
});