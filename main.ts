let message = ""
// Set the radio group to 1 (same as transmitter)
radio.setGroup(1)
// Set the radio group to 1 (same as transmitter)
basic.forever(function () {
    // Receive the radio message
    message = radio.receiveString()
    if (message == "INTRUDER!") {
        // If the "ALARM" message is received
        // Turn on LED alarm (connected to pin2)
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        1,
        2914,
        255,
        255,
        2000,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.LoopingInBackground)
        // Display an alert message
        basic.showString("!!")
        // Pause for 1 second
        basic.pause(1000)
        // Turn off LED alarm
        pins.digitalWritePin(DigitalPin.P2, 0)
        // Clear the display
        basic.clearScreen()
    }
    // Pause before the next message
    basic.pause(100)
})
