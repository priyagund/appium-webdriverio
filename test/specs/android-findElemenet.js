const { AppiumDriver } = require("appium/build/lib/appium")

describe('Android Element Test', () => {

    it('Find element by accessibility Id', async () => {
        // find element by accessibility
        const appOption = await $('~App');

        //click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar')
        console.log("actionbar is" + actionBar)
        await expect(actionBar).toBeExisting()

    })
})