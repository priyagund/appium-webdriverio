const { AppiumDriver } = require("appium/build/lib/appium")

describe('Accept Alert', () => {

    it.skip("Working with dialog boxes", async () => {
        //access activity
        await driver.stratActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        //click on first dialog box

        await $('//*[@resouce-id ="io.appium.android.api: id / two_buttons"]').click();

        //assert allert 

        await driver.acceptAlert();

        //assertion -alert box is no longer visible

        await expect($('//*[@resouce-id="android: id / alertTitle"]')).not.toExist();

    })

    //scroll to the end (if element is not stable its get moved)
    it("vertical scrolling", async () => {
        console.log("In vertical scrolling")
        await $('~App').click();
        await $('~Activity').click();
        //scroll to end
        // await $('android=new Uiscrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
        await $('~Secure Surfaces').click()
        await expect($('~Secure Dialog')).toExist();

    })

    it("Horizontal scrolling", async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1")
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForword()')
        await deriver.pause(3000)
    })

    it.only('working with date picker', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1")
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        console.log("current date is" + date)
        const currentDate = await date.getText()
        console.log("current date is" + currentDate)

        //click on change the date button
        await $('~change the date').click()

        //scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForword()')

        //select 10th date
        await $('//*[@text="10"]').click();

        //click on ok button

        await $('//*[@resouce-id="android:id/button1"]').click()

        //verify the updated date

        await expect(await date.getText()).not.toEqual(currentDate)

    })
})