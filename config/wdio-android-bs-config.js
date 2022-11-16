require('dotenv').config()
const { config } = require("./wdio.conf")

//browserstack credentials

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

config.specs = [
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