let Magnet = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    Magnet = input.magneticForce(Dimension.Strength)
    if (Magnet < 50) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Sad)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.Happy)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(15000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
    }
})
