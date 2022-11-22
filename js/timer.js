export default function Timer({
    minutesDisplay,
    secondsDisplay
}) {
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, newSeconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        newSeconds = newSeconds === undefined ? 0 : newSeconds
        minutesDisplay.textContent = String(newMinutes).padStart("2", 0)
        secondsDisplay.textContent = String(newSeconds).padStart("2", 0)
    }

    function countdown() {
        timerTimeOut = setTimeout(function() {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            let finished = minutes <= 0 && seconds <= 0
    
            if(finished) {
                updateDisplay()
                resetControls()
                sounds.timeEnd()
                return
            }
    
            if(seconds <= 0) {
                seconds = 60
                --minutes
            }
    
            updateDisplay(minutes, String(seconds - 1))
    
            countdown()
        }, 1000);
    }
    
    function plusMinutes() {
        if (minutes < 60) {
            minutes = minutes + 5
            updateDisplay()
        }
    }
    
    function minusMinutes() {
        if(minutes > 0) {
            minutes = minutes - 5
            updateDisplay()
        }
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {updateDisplay, countdown, plusMinutes, minusMinutes, hold}
}