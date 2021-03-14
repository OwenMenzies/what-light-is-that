input.onButtonPressed(Button.A, function () {
    if (system_function_on == true) {
    	
    } else if (system_function_on == false) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (system_function_on == true) {
        system_function_on = false
    } else if (system_function_on == false) {
        system_function_on = true
    }
})
let current_light_level = 0
let system_function_on = false
system_function_on = false
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
basic.clearScreen()
basic.forever(function () {
    while (system_function_on == true) {
        current_light_level = Math.map(input.lightLevel(), 0, 255, 0, 180)
        basic.pause(100)
    }
    basic.pause(100)
})
