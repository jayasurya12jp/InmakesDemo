$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ama.feature");
formatter.feature({
  "name": "To validate the Login functionality of Faceboof",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature"
    }
  ]
});
formatter.scenario({
  "name": "To validate the facebook with Valid email and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the Browser and Maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.to_launch_the_Browser_and_Maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.to_launch_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the email in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.to_pass_the_email_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.to_pass_the_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login buttone",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_the_login_buttone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and nagative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User launch the Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User launch Facebook URL",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass data \"\u003cemaildata\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass data \"\u003cpassdata\u003e\" in Password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to Click Login buttone",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildata",
        "passdata"
      ]
    },
    {
      "cells": [
        "surya@gmail.com",
        "123456"
      ]
    },
    {
      "cells": [
        "hariram@gmail.com",
        "23567"
      ]
    },
    {
      "cells": [
        "jayi@gmail.com",
        "234567"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the positive and nagative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User launch the Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Step2.user_launch_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User launch Facebook URL",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_launch_Facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"surya@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"123456\" in Password field",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_pass_data_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to Click Login buttone",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_Click_Login_buttone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Step2.user_has_to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and nagative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User launch the Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Step2.user_launch_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User launch Facebook URL",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_launch_Facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"hariram@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"23567\" in Password field",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_pass_data_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to Click Login buttone",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_Click_Login_buttone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Step2.user_has_to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and nagative combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User launch the Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Step2.user_launch_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User launch Facebook URL",
  "keyword": "When "
});
formatter.match({
  "location": "Step2.user_launch_Facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"jayi@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_pass_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass data \"234567\" in Password field",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_pass_data_in_Password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to Click Login buttone",
  "keyword": "And "
});
formatter.match({
  "location": "Step2.user_has_to_Click_Login_buttone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Step2.user_has_to_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});