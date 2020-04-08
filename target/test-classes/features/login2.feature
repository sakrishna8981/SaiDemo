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
| abc@ssc.com | | saikrishna |
And clicks on signup button
Then He can visit the practice page
And A message is displayed

@RegTest
Scenario Outline: Successful login with multiple valid credentials
Given User is on Home Page
When User enter Username <username> amd Password <password>
And clicks on Login button
Then He can visit the practice page
And A message is displayed

Examples:

|username|password|
|test@email.com|abcabc|
|test@email.com|abcabc|

