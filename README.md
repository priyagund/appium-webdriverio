# Step by step instalation for appium with webdriverio

1.  install nvm with below command and close the terminal and reopen to start using nvm.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

2. install node version16 not the latest version(s) as that is not compatible as of now with WebdriverIO & Appium by below command.

```
brew install node@16
```

3. download android studio on below website

```
https://developer.android.com/
```

4. Setup Android home path
   i. see andriod pathe by below command

   ```
   echo ANDROID_HOME
   ```

   ii. check default location of android studio by below path

   ```
   cd /Users/priyankagund/library/Android/sdk

   ```

   once andriod setup done follow below steps

   ```
   i. Click on ‘More Actions’ drop down.
   ii.Click on ‘SDK Manager'.
   iii. In Andriod sdk section check default path is selected and uncheck ‘Hide Obsolete Packages’.
   iv. in SDK platform check if ‘Android API 33’, ‘Android 12.0(S)’ is selected
   v.And under ‘SDK Tools’ select ‘Android SDK Build-Tools 33’, ‘Android SDK Command-line Tools(latest)’, ‘Android Emulator’, ‘Android SDK Platform — Tools’, ‘Android SDK Tools (Obsolete)’
   ```

5.Setup virtual device emulator by following steps

i.Open android studio
ii.Click on ‘More Actions’click on Virtual Device Manager’.
iii.click on Create Device select pixel 5 row from tabel and seelct API 33 then next and finish.

6.  How to install Appium servcer GUI
    i. https://github.com/appium/appium-desktop/releases download latest Appium inspector
    ii. open appium-inspector enter host and port number
    iii. click on edit configuration and Enter the android_home and java_home path
    iv. Click on save and restart once restrated you can continue with testing.

7.  How to install appium inspector
    Visit https://github.com/appium/appium-inspector/releases and install latest inspector

8.  how to install Appium
    do npm install -g appium@next ---to install latest version

9.  run appium-doctor command to check everything working propoerly
    i. install appium-doctor by below command

    ```
    npm install -g appium-doctor
    ```

    ii. run below command to check weather it is working for andriod or ios

    ```
    appium-doctor andriod
    ```

10.install Appium drivers by below commmand
for ios -> appium driver install xcuitest
for android -> appium driver install uiautomator2

11. How to setup webdriverio
    i. run below command to install dependancy

    ```
    npm init -y (-y generate the package.json file with default dependancy without propting any question)
    ```

    ii. Now you can see package.json file will created with below details.

        ``` {

    "name": "appium-webdriverio",
    "version": "1.0.0",
    "description": "1. install nvm with below command and close the terminal and reopen to start using nvm.",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
    }

    ```

    ```

iii. install webdriverIO CLI with below command

    ```
    npm install @wdio/cli
    ```

iv. setup config with below command

```
 npx wdio config
```

How to do webdriver config

i. add test app in app folder.
ii.updates capabilities in config file as below

````
platformName: "Android",
"appium:platformVersion": "11.0",
"appium:deviceName": "Pixel 2",
"appium:automationName": "UIAutomator2",
"appium:app": path.join(process.cwd(), "./app/andriod/ApiDemos-debug.apk")

 ```

iii.setup test folders as path added in config --  './test/specs/**/*.js'

```
iv. Add test for finding element by ussing accesbility id
```

describe('Android Element Test', () => {

    it('Find element by accessibility Id', async () => {
        // find element by accessibility
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        // assertion
        const actioBar = await $('~Action Bar')
        await actioBar.toBeExisting()

    })```

v. run test by using below command

  ```
  npx wdio
  ```

Note : make sure that emulator is in running state.


````

# How to configure browser stack

1. create browser stack account and upload app.

2. config browser stack with below steps.

```
  i. install broweser stack service with -- npm install @wdio/browserstack-service --save-dev
```

```
ii.add config file as below
```

```config.specs = [
   './test/specs/android/*.js'
]
connectionRetryTimeout: 100000
config.capabilities = [{
   platformName: "Android",
   "appium:platformVersion": "10.0",
   "appium:deviceName": "Google Pixel 3",
   "appium:automationName": "UIAutomator2",
   "appium:app": "bs://479f319e7ce5296221bdb85e18eefbc4e661947b",
   "appium:autoGrantPermissions": true
}]

config.services = ['browserstack'];
exports.config = config;
```

```
iii. run test using below command
```

```
npx wdio config/wdio-android-bs-config.js
```

```
iv. you can see the test got passed with browse stack by clicking on App Automate tab

```

error:

webdriver: RequestError: connect ETIMEDOUT 103.126.7.240:4723 when running "https://hub-cloud.browserstack.com:4723/wd/hub/session"

Solution:

remove port from config file.
