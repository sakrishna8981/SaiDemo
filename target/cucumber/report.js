$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "Description: The feature is to test the login functionality",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters Username \"test@email.com\"amd Password \"abcabc\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 16465884549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@email.com",
      "offset": 22
    },
    {
      "val": "abcabc",
      "offset": 51
    }
  ],
  "location": "Stepdefinition.user_enters_username_somethingamd_password_something(String,String)"
});
formatter.result({
  "duration": 26703097003,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.clicks_on_Login_button()"
});
formatter.result({
  "duration": 11260359452,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 251973937,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.a_message_is_displayed()"
});
formatter.result({
  "duration": 832820,
  "status": "passed"
});
formatter.after({
  "duration": 219354525,
  "status": "passed"
});
formatter.uri("login2.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "Description: The feature is to test the login functionality",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Successful login with multiple valid credentials",
  "description": "",
  "id": "login;successful-login-with-multiple-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enter Username \u003cusername\u003e amd Password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login;successful-login-with-multiple-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "login;successful-login-with-multiple-valid-credentials;;1"
    },
    {
      "cells": [
        "test@email.com",
        "abcabc"
      ],
      "line": 31,
      "id": "login;successful-login-with-multiple-valid-credentials;;2"
    },
    {
      "cells": [
        "test@email.com",
        "abcabc"
      ],
      "line": 32,
      "id": "login;successful-login-with-multiple-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Successful login with multiple valid credentials",
  "description": "",
  "id": "login;successful-login-with-multiple-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enter Username test@email.com amd Password abcabc",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8741187275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@email.com",
      "offset": 20
    },
    {
      "val": "abcabc",
      "offset": 48
    }
  ],
  "location": "Stepdefinition.user_enters_username_amd_password(String,String)"
});
formatter.result({
  "duration": 26795844970,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.clicks_on_Login_button()"
});
formatter.result({
  "duration": 11352315235,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 202726789,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.a_message_is_displayed()"
});
formatter.result({
  "duration": 104797,
  "status": "passed"
});
formatter.after({
  "duration": 2380202075,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Successful login with multiple valid credentials",
  "description": "",
  "id": "login;successful-login-with-multiple-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enter Username test@email.com amd Password abcabc",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8285289719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@email.com",
      "offset": 20
    },
    {
      "val": "abcabc",
      "offset": 48
    }
  ],
  "location": "Stepdefinition.user_enters_username_amd_password(String,String)"
});
formatter.result({
  "duration": 22017193213,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.clicks_on_Login_button()"
});
formatter.result({
  "duration": 11459707054,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 222808566,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.a_message_is_displayed()"
});
formatter.result({
  "duration": 130462,
  "status": "passed"
});
formatter.after({
  "duration": 2166423209,
  "status": "passed"
});
});