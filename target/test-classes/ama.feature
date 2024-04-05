@Feature
Feature: To validate the Login functionality of Faceboof
 
 @Sanity
  Scenario: To validate the facebook with Valid email and valid password
   Given To launch the Browser and Maximize
   When To launch the facebook url
   And  To pass the email in email field
   And  To pass the password in password field
   And  Click the login buttone
   Then Close the browser
   
   @Smoke
   Scenario Outline: To validate the positive and nagative combination of login functionality
   Given User launch the Browser
   When User launch Facebook URL
   And  User has to pass data "<emaildata>" in email field
   And User has to pass data "<passdata>" in Password field
   And User has to Click Login buttone
   Then  User has to close the Browser
   
   Examples:

   |emaildata       |passdata     |
   |surya@gmail.com |123456       |
   |hariram@gmail.com|23567       |
   |jayi@gmail.com  | 234567      |


 