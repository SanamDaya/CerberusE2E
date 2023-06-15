Feature: HeroDetail Functionality

    This Feature shows the details for a selected hero

    Background: 
        Given the user is on the dashboard

    Scenario: As a TOH user, I want to navigate to heroes page in order to see the heroes
        When the user clicks on the first available hero
        Then the user should see the details for first available hero