input.onButtonPressed(Button.AB, function () {
	
})
basic.forever(function () {
    if (maqueen.Ultrasonic() < 20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
})
