import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks the Dashboard button$/, () => {
	cy.xpath("/html/body/app-root/nav/a[1]").click();
});

Then(/^the user should see 4 heroes$/, () => {
	cy.get('body > app-root > app-dashboard div > a').should('have.length', 4);
});
