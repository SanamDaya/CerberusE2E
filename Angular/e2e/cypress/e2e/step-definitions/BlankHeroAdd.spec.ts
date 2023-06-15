import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
let initialHeroCount: number = 0;

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks the Heroes button$/, () => {
	cy.xpath("/html/body/app-root/nav/a[2]").click();
});

When(/^the user clicks on the Add Hero button$/, () => {
    cy.get('body > app-root > app-heroes > ul > li').then(elements => {
        initialHeroCount = elements.length;
        cy.xpath("/html/body/app-root/app-heroes/div/button").click(); 
        cy.wait(1000);
    });	
});

Then(/^the user should see no new hero added$/, () => {
	cy.get('body > app-root > app-heroes > ul > li').should('have.length', initialHeroCount);
});
