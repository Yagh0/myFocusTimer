import {buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonSub,
    buttonForest,
    buttonRain,
    buttonCafe,
    buttonFirePlace} from "./elements.js"

export default function Events ({
    controls,
    timer,
    sounds
}) {
    buttonPlay.addEventListener('click', function() {
        controls.play()
        timer.countdown()
        sounds.pressButton()
    })
    
    buttonPause.addEventListener('click', function() {
        controls.pause()
        timer.hold()
        sounds.pressButton()
    })
    
    buttonStop.addEventListener('click', function() {
        timer.updateDisplay()
        controls.resetControls()
        timer.hold()
        sounds.pressButton()
    })
    
    buttonPlus.addEventListener('click', function() {
        timer.plusMinutes()
        sounds.pressButton()
    })
    
    buttonSub.addEventListener('click', function() {
        timer.minusMinutes()
        sounds.pressButton()
    })





    buttonForest.addEventListener('click', function() {
        controls.selectButton(buttonForest)
        buttonRain.classList.remove('selected')
        buttonCafe.classList.remove('selected')
        buttonFirePlace.classList.remove('selected')
    
    
        if (buttonForest.classList.contains('selected')) {
            sounds.bgCafe.pause()
            sounds.bgFirePlace.pause()
            sounds.bgRain.pause()
            sounds.bgForest.play()
        } else {
            sounds.pauseSounds()
        }
    })
    buttonRain.addEventListener('click', function() {
        controls.selectButton(buttonRain)
        buttonCafe.classList.remove('selected')
        buttonFirePlace.classList.remove('selected')
        buttonForest.classList.remove('selected')
    
    
        if (buttonRain.classList.contains('selected')) {
            sounds.bgCafe.pause()
            sounds.bgFirePlace.pause()
            sounds.bgForest.pause()
            sounds.bgRain.play()
        } else {
            sounds.pauseSounds()
        }
    })
    buttonCafe.addEventListener('click', function() {
        controls.selectButton(buttonCafe)
        buttonForest.classList.remove('selected')
        buttonRain.classList.remove('selected')
        buttonFirePlace.classList.remove('selected')
    
        
        if (buttonCafe.classList.contains('selected')) {
            sounds.bgFirePlace.pause()
            sounds.bgForest.pause()
            sounds.bgRain.pause()
            sounds.bgCafe.play()
        } else {
            sounds.pauseSounds()
        }
    })
    buttonFirePlace.addEventListener('click', function() {
        controls.selectButton(buttonFirePlace)
        buttonForest.classList.remove('selected')
        buttonRain.classList.remove('selected')
        buttonCafe.classList.remove('selected')
    
        if (buttonFirePlace.classList.contains('selected')) {
            sounds.bgForest.pause()
            sounds.bgRain.pause()
            sounds.bgCafe.pause()
            sounds.bgFirePlace.play()
        } else {
            sounds.pauseSounds()
        }
    })
    
    return
}