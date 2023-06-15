Feature: HeroPage Functionality

    This Feature tests the heroes page

    Background: 
        Given the user is on the heroes page

    Scenario: As a toh user, I want to navigate to heroes page in order to see the heroes
        When the user types a hero
        And the user clicks add hero
        Then the user should see the hero at the end of the heroes list