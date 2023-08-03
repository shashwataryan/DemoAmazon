/// <reference types="cypress"/>

const elements =
{
    calendar:
    {
        calendarSelect: 'div[class="_8bbcb8f2"]',
        monthYear: 'p[class="fa8943dd _433fc5ff"]',
        arrow: 'div[class="_898b66e5 _87c3834d"]',
        date: 'li[class=" ca600550     "]',
        dateMonth: 'span[class="dcb9db95 colorBase sizeMedium"]'
    }
}

export default class FlightBookingPage {
    selectCalendar() {
        return cy.get(elements.calendar.calendarSelect).eq(0).click();
    }

    getMonthYear() {
        return cy.get(elements.calendar.monthYear);
    }

    clickArrow() {
        return cy.get(elements.calendar.arrow).click();
    }

    selectDate() {
        return cy.get(elements.calendar.date).click();
    }

    selectedDateMonth()
    {
        return cy.get(elements.calendar.dateMonth);
    }
}
