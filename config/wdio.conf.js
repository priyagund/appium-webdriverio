const path = require('path')
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    specs: [
        './test/specs/android/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "Pixel 5",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "./app/andriod/ColorNote+Notepad.apk"),
        "appium:autoGrantPermissions": true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 1,
    services: [['appium', {
        args: {
            address: 'localhost',
            port: 4723
        },
        logPath: './'

    }]
    ],

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
