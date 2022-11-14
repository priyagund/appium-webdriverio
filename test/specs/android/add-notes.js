const { AppiumDriver } = require("appium/build/lib/appium")

describe('Add Notes', () => {
    it('Skip tutorial and add notes', async () => {
        await driver.pause(3000)
        // await $('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
        //     .click()
        // await expect($('//*[@text="Add note"]')).toBeDisplayed

    })

    // it('Add note title save changes and verify Note', async () => {
    //     await $('//*[@text="Add note"]').click()
    //     await $('//*[@text="Text"]').click()
    //     await expect($('//*[@text="Editing"]'))


    // })
})