class AddNoteScreen {


    get skipBtn() {
        return $('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    get addNoteText() {
        return $('//*[@text="Add note"]')
    }

    get textOption() {
        return $('//*[@text="Text"]')
    }

    get textEditing() {
        return $('//*[@text="Editing"]')
    }

    get noteHeading() {
        return $('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get noteBody() {
        return $('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    get editNote() {
        return $('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    get viewNote() {
        return $('//*[resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    }

}

module.exports = new AddNoteScreen();