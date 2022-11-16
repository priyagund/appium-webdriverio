
describe.skip('Android Element Test', () => {

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

    it('Find element by class name', async () => {
        const className = await $('android.widget.TextView')
        //Assertion
        await expect(className).toHaveText("API Demos")

    })

    it('FInd element by x-path', async () => {
        //xpath -(//tagname=[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    })

    //find by resouceId 
    it('FInd element by x-path', async () => {
        //xpath -(//tagname=[@attribute=value])
        await $('//android.widget.Button[@resouce-id="io.appium.android.apis:id/select_button"]').click();
    })

})

it('find elemens by UIAutomator', async () => {
    await $('android = new UiSelector().textContains("Alert")').click();


})

