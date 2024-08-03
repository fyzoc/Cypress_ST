import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given(`I navigate to st homepage`, () => {
    cy.visit("https://sunticaretmerkezi.com/")
});



/*
When(`I click on Login`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I enter the credentials`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I click on login button`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`I verify I am on the dashboard`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});
*/