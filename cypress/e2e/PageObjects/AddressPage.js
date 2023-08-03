/// <reference types="cypress"/>

const elements =
{

    input:
    {
        fullName: 'input[id="address-ui-widgets-enterAddressFullName"]',
        pinCode: 'input[id="address-ui-widgets-enterAddressPostalCode"]',
        mobile: 'input[id="address-ui-widgets-enterAddressPhoneNumber"]',
        address: 'input[id="address-ui-widgets-enterAddressLine1"]',
    },

    button:
    {
        addAddress: 'span[id="address-ui-widgets-form-submit-button"]'
    },

    message:
    {
        addressSavedMessage: 'h4[class="a-alert-heading"]'
    }
}

export default class AddressPage {
    clickYourAddress() {
        return cy.contains('Your Addresses').click();
    }

    clickAddAddress() {
        return cy.contains('Add address').click();
    }


    enterFullName(Name) {
        return cy.get(elements.input.fullName).type(Name);
    }

    enterMobileNumner(phoneNumber) {
        return cy.get(elements.input.mobile).type(phoneNumber);
    }

    enterPinCode(pCode) {
        cy.get(elements.input.pinCode).clear();
        return cy.get(elements.input.pinCode).type(pCode);
    }

    enterAddress(fullAddress) {
        return cy.get(elements.input.address).type(fullAddress);
    }

    clickAddAddressButton() {
        return cy.get(elements.button.addAddress).click();
    }

    verifyAddressSaved() {
        return cy.get(elements.message.addressSavedMessage);
    }
}