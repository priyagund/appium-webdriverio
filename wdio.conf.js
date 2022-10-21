const path = require('path')
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel 2",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "./app/andriod/ApiDemos-debug.apk")

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
    connectionRetryCount: 3,
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
