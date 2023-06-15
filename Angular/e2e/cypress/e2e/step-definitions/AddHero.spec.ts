import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

let numberOfHeroes: number = 0;

Given(/^the user is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

When(/^the user types a hero$/, () => {
	cy.get('[id$=new-hero]').type("Spiderman")
});

And(/^the user clicks add hero$/, () => {
    cy.get('[class$=add-button]').click();
    cy.wait(1000);
});

Then(/^the user should see the hero at the end of the heroes list$/, () => {
    cy.get('body > app-root > app-heroes > ul > li').then(elements => {
        numberOfHeroes = elements.length;
        cy.xpath(`html/body/app-root/app-heroes/ul/li[${numberOfHeroes}]`).should("contain", "Spiderman");
    });	
});


