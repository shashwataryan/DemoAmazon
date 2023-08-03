/// <reference types="cypress"/>

import FlightBookingPage from '../e2e/PageObjects/FlightBookingPage';
import SignInPage from '../e2e/PageObjects/SignInPage';
import { email, password } from '../support/constants';

const signin=new SignInPage();
const flightbooking=new FlightBookingPage();

Cypress.Commands.add('visitAmazon', () => {
  
  cy.visit("https://www.amazon.in/");
});

Cypress.Commands.add('signInCustom', () => {
  
  signin.emailInput(email);
  signin.clickContinue();
  signin.passwordInput(password);
  signin.clickFinalSignIn();
  signin.welcomeMessage().should('contain',`Hello, Mindfire`);
});

Cypress.Commands.add('selectDateFromCalendar', (userDate) => {

  const desireddate = new Date(userDate);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[desireddate.getMonth()];
  var year = desireddate.getFullYear();
  var date = desireddate.getDate();
  var desiredMonthYear = month + " " + year.toString(10); //convert year in integer to string with base 10
  var c = 0, x = 0, y = 0;
  var userid = "1_" + desireddate.getMonth() + "-" + year; //to be used in css selector for getting monthyear combination dynamically

  flightbooking.getMonthYear().each((text) => {

    cy.wrap(text).invoke('text').then((text1) => {
      //whenever c is in the multiples of 2 then the next arrow is clicked
      c++;

      //here x variable checks that we have not received a matching month year combination as the required month year. 
      if (!(desiredMonthYear.toUpperCase() === text1.toUpperCase()) && c % 2 == 0 && x == 0) {
        flightbooking.clickArrow();
      }

      if (desiredMonthYear.toUpperCase() === text1.toUpperCase()) {
        cy.get(`div[id="${userid}"] [class="_8bd51405"] [class*="ca600550"][role="button"]`).each((text2) => {
          cy.wrap(text2).invoke('text').then((text3) => {
            if (text3.includes(date) && y != 1) {
              cy.get(`div[id="${userid}"] [class="_8bd51405"] [class*="ca600550"][role="button"]`).eq(date - 1).click()
              y = 1;//to check that we can enter the if condition only once
            }
          });
        });
        x = 1;
      }
    });
  });
});
