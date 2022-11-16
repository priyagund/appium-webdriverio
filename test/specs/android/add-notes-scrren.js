const AddNoteScreen = require("../../scrrenobject/android/add-note-screen")

describe.skip('Add Notes', () => {
    it('Skip tutorial and add notes', async () => {
        await driver.pause(3000)
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteText).toBeDisplayed

    })

    it('Add note title save changes and verify Note', async () => {
        await (AddNoteScreen.addNoteText).click()
        await AddNoteScreen.textOption.click()
        await expect($(AddNoteScreen.textEditing))

        //add note title
        await (AddNoteScreen.noteHeading)
            .addValue(' Fav Animal List')

        //add note body
        await (AddNoteScreen.noteBody)
            .addValue("Parrot\nHen\ndog")

        //save changes

        await driver.back();
        await driver.back();

        //assertion

        await expect(AddNoteScreen.editNote)
            .toBeDisplayed();
        await expect(AddNoteScreen.viewNote)
            .toHaveText("Parrot\nHen\ndog")

    })
})