import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
let initialHeroCount: number = 0;




Given(/^the user is on the Heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

When(/^the user is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

When(/^the user clicks on remove hero button$/, () => {
	cy.get("body > app-root > app-heroes > ul > li").then(elements => {
		initialHeroCount = elements.length;
		cy.xpath("/html/body/app-root/app-heroes/ul/li[2]/button").click();
	});
});

Then(/^the heroes list should be 8$/, () => {
	cy.get("body > app-root > app-heroes > ul > li").should('have.length.lessThan', initialHeroCount)
});
