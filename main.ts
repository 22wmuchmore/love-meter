input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(0, 100))
})
basic.showString("Love Meter")
basic.forever(function () {
    radio.sendValue("name", 0)
})
