Feature: Add hero Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the heroes page

    Scenario: As a TOH user, I want to add a hero and see the new hero in the list
        When the user types a hero
        And the user clicks add hero
        And the user should see the hero at the end of the heroes list