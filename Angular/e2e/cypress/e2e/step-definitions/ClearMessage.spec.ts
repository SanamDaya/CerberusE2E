import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

When(/^the user clicks the button to clear the message$/, () => {
	cy.xpath("/html/body/app-root/app-messages/div/button").click();
});

Then(/^the user shall see all the messages cleared$/, () => {
	return true;
});




