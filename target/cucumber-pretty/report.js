$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ManagementDropDwnHandle.feature");
formatter.feature({
  "line": 2,
  "name": "Administrator - Check the flow of all User Management Drop Down Handle",
  "description": "",
  "id": "administrator---check-the-flow-of-all-user-management-drop-down-handle",
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
  "name": "Verify the flow of all User Management Drop Down Handle",
  "description": "",
  "id": "administrator---check-the-flow-of-all-user-management-drop-down-handle;verify-the-flow-of-all-user-management-drop-down-handle",
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
  "name": "login to the APP",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click on the USERMENU",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Select institutinsDropDown",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select rolesDropDown",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select enrollmentStatusDropDown",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Slect searchByDropDown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click ON GO BUTTON",
  "keyword": "And "
});
formatter.match({
  "location": "UserManagementDropDwnHandStepDef.login_to_the_APP()"
});
formatter.result({
  "duration": 10577579700,
  "status": "passed"
});
formatter.match({
  "location": "UserManagementDropDwnHandStepDef.click_on_the_USERMENU()"
});
formatter.result({
  "duration": 4097055301,
  "status": "passed"
});
formatter.match({
  "location": "UserManagementDropDwnHandStepDef.select_institutinsDropDown()"
});
formatter.result({
  "duration": 6390908500,
  "status": "passed"
});
formatter.match({
  "location": "UserManagementDropDwnHandStepDef.select_rolesDropDown()"
});
formatter.result({
  "duration": 6139789300,
  "status": "passed"
});
formatter.match({
  "location": "UserManagementDropDwnHandStepDef.select_enrollmentStatusDropDown()"
});
formatter.result({
  "duration": 6127890200,
  "status": "passed"
});
formatter.match({
  "location": "UserManagementDropDwnHandStepDef.slect_searchByDropDown()"
});
formatter.result({
  "duration": 3121285199,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"mdc-list-item__primary-text\"\u003e...\u003c/span\u003e is not clickable at point (837, 322). Other element would receive the click: \u003cmat-card-content class\u003d\"mat-mdc-card-content p-24\"\u003e...\u003c/mat-card-content\u003e\n  (Session info: chrome\u003d121.0.6167.140)\nBuild info: version: \u00274.12.1\u0027, revision: \u00278e34639b11\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.20\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [51af5a9f31ee5f613263cafdfb4e2c28, clickElement {id\u003dDB932AE5023D97AF0589E3E2ED40A55E_element_4476}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 121.0.6167.140, chrome: {chromedriverVersion: 121.0.6167.85 (3f98d690ad7e..., userDataDir: C:\\Users\\SAPPHI~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:64633}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:64633/devtoo..., se:cdpVersion: 121.0.6167.140, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (51af5a9f31ee5f613263cafdfb4e2c28)] -\u003e xpath: (//span[text()\u003d\u0027All\u0027])[3]]\nSession ID: 51af5a9f31ee5f613263cafdfb4e2c28\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:224)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cucumber.PageObjects.allUserManagementDropDwnHandlePageObj.SlectsearchByDropDown(allUserManagementDropDwnHandlePageObj.java:68)\r\n\tat com.cucumber.stepdefination.UserManagementDropDwnHandStepDef.slect_searchByDropDown(UserManagementDropDwnHandStepDef.java:60)\r\n\tat ✽.Then Slect searchByDropDown(src/test/resources/features/ManagementDropDwnHandle.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserManagementDropDwnHandStepDef.click_ON_GO_BUTTON()"
});
formatter.result({
  "status": "skipped"
});
});