radio.onReceivedNumber(function (receivedNumber) {
    if (myNumber == receivedNumber) {
        radio.sendNumber(21)
    } else if (receivedNumber == 21) {
    	
    } else if (receivedNumber == 20) {
    	
    } else {
        radio.sendNumber(20)
    }
})
input.onButtonPressed(Button.A, function () {
    myNumber = myNumber + 1
    basic.showNumber(myNumber)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(myNumber)
})
let myNumber = 0
radio.setGroup(100)
