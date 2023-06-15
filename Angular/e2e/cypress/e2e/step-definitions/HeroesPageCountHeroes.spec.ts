import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks the Heroes button$/, () => {
	cy.xpath("/html/body/app-root/nav/a[2]").click();
});

Then(/^the user should see atleast 9 heroes$/, () => {
	cy.get('body > app-root > app-heroes > ul > li').should('have.length.at.least', 9);
});
