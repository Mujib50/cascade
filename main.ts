let Change = 0
input.onButtonPressed(Button.A, function () {
    Change = 4
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            basic.pause(100)
            led.plot(Y, Y)
        }
        for (let Y = 0; Y <= 4; Y++) {
            basic.pause(100)
            led.plot(Y, Y + (X + 1))
        }
    }
})
