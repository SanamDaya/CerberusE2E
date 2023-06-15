Feature: ClearMessagesOnHero Functionality

    This Feature tests remove hero scenarios

    Background: 
        Given the user is on the landing page


    Scenario: As a toh user, I want to remove a hero in order to see the hero list decrease
        
        When the user navigates to the hero page
        Then the clear messages button should not be visible


        

