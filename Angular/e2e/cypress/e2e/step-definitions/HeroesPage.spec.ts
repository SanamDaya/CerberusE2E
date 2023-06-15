import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks the Heroes button$/, () => {
	cy.xpath("/html/body/app-root/nav/a[2]").click();
});

Then(/^the user shall see the heroes page$/, () => {
	cy.xpath("/html/body/app-root/app-heroes/h2").should('contain', 'My Heroes');
});
  