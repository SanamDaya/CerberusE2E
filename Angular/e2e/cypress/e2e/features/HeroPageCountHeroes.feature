Feature: HeroPageCountHeroes Functionality

    This Feature counts the heroes on the heroes page

    Background: 
        Given the user is on the landing page

    Scenario: As a TOH user, I want to navigate to heroes page in order to see the heroes
        When the user clicks the Heroes button
        Then the user should see atleast 9 heroes