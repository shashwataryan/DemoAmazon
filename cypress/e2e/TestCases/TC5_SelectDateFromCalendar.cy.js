import FlightBookingPage from "../PageObjects/FlightBookingPage";
import HomePage from "../PageObjects/HomePage";
import ListPage from "../PageObjects/ListPage";
import SignInPage from "../PageObjects/SignInPage";

const homepage = new HomePage();
const listpage = new ListPage();
const flightbooking = new FlightBookingPage();
const signin = new SignInPage();

describe("Flight Booking", () => {
    beforeEach(() => {
        cy.visitAmazon();
    });

    it("Select date from calendar", () => {
        signin.clickSignInButton();
        cy.signInCustom();
        homepage.search("flight ticket booking");
        listpage.clickFlightBooking();
        flightbooking.selectCalendar();
        cy.selectDateFromCalendar("2023-10-13");
        const desireddate = new Date("2023-10-13");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var month = months[desireddate.getMonth()];
        var date = desireddate.getDate();
        var selectedDateMonth = date.toString(10) + " " + month;
        flightbooking.selectedDateMonth().invoke('text').should('include',selectedDateMonth);
    })
})