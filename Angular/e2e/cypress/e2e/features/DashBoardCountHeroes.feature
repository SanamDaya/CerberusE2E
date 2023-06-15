Feature: DashboardCountHeroes Functionality

    This Feature counts the heroes on the dashbaord page

    Background: 
        Given the user is on the landing page

    Scenario: As a TOH user, I want to navigate to the dashboard to see the top heroes
        When the user clicks the Dashboard button
        Then the user should see 4 heroes