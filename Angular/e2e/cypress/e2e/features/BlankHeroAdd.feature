Feature: DashboardCountHeroes Functionality

    This Feature adds a hero without a name

    Background: 
        Given the user is on the landing page

    Scenario: As a TOH user, I want to navigate to the dashboard to see the top heroes
        When the user clicks the Heroes button
        And the user clicks on the Add Hero button
        Then the user should see no new hero added