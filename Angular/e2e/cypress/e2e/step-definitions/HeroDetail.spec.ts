import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the dashboard$/, () => {
    cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks on Bombasto$/, () => {
	cy.xpath("/html/body/app-root/app-dashboard/div/a[1]").click();
});

Then(/^the user should see the details for Bombasto$/, () => {
	cy.xpath("/html/body/app-root/app-hero-detail/div/h2").should('contain', 'BOMBASTO Details');
});
