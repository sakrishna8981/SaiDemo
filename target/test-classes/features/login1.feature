Feature: Login
Description: The feature is to test the login functionality


Scenario: Successful login with valid credentials
Given User is on Home Page
When User enters Username "test@email.com"amd Password "abcabc"
And clicks on Login button
Then He can visit the practice page
And A message is displayed


Scenario: Successful signup with valid credentials
Given User is on Home Page
When User enters the following detail on signup page
| abc@ssc.com | | dstws |
And clicks on signup button
Then He can visit the practice page
And A message is displayed
