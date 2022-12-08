
describe('IOS find element', () => {
    it('find element by accecibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    });

    it('find element by tag name', async () => {
        console.log(await $('XCUIElementTypeStaticText').getText())

        //multiple element
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText())
        }

    })

    it('find element by xpath', async () => {
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it('find element by class chain', async () => {
        //const alertBox = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertBox = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertBox}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it('find element by predicate string', async () => {
        //const alertBox = 'label == "Alert Views"';
        const alertBox = 'value BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertBox}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best")
    })

    it.only('enter test in serach bar', async () => {
        await $('~Search').click();
        await $('~Default').click();
        await $('//XCUIElementTypeSearchField').addValue("I love this cource")
        await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value")
        await $('~Clear text').click();
        await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value")
    })

});