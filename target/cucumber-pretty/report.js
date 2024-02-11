$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/SearchUser.feature");
formatter.feature({
  "line": 2,
  "name": "Administrator - Search User",
  "description": "",
  "id": "administrator---search-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "User Management Search User",
  "description": "",
  "id": "administrator---search-user;user-management-search-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User on the loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on the UserMenu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User selected All Drop Down Values",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Clicks GO button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter User Nane And search",
  "keyword": "Then "
});
formatter.match({
  "location": "searchUserStepDef.user_on_the_loginpage()"
});
formatter.result({
  "duration": 10508975900,
  "status": "passed"
});
formatter.match({
  "location": "searchUserStepDef.user_Click_on_the_UserMenu()"
});
formatter.result({
  "duration": 2145312300,
  "status": "passed"
});
formatter.match({
  "location": "searchUserStepDef.user_selected_All_Drop_Down_Values()"
});
formatter.result({
  "duration": 26850987300,
  "status": "passed"
});
formatter.match({
  "location": "searchUserStepDef.user_Clicks_GO_button()"
});
formatter.result({
  "duration": 4131018800,
  "status": "passed"
});
formatter.match({
  "location": "searchUserStepDef.user_Enter_User_Nane_And_search()"
});
formatter.result({
  "duration": 14429014100,
  "status": "passed"
});
});