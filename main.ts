basic.forever(function () {
    if (input.temperature() < 26) {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    } else {
        if (input.temperature() >= 26 && input.temperature() < 34) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
        } else {
            if (input.temperature() >= 34) {
                basic.showIcon(IconNames.No)
                basic.clearScreen()
            }
        }
    }
})
