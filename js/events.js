import {buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonSub,
    buttonForest,
    buttonRain,
    buttonCafe,
    buttonFirePlace,
    lightButton,
    darkButton,
    forestSlider,
    cafeSlider,
    rainSlider,
    fireplaceSlider} from "./elements.js"

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
        controls.resetControls()
        timer.hold()
        sounds.pressButton()
    })
    
    buttonSub.addEventListener('click', function() {
        timer.minusMinutes()
        controls.resetControls()
        timer.hold()
        sounds.pressButton()
    })





    buttonForest.addEventListener('click', function() {
        controls.selectButton(buttonForest)
        buttonRain.classList.remove('selected')
        buttonCafe.classList.remove('selected')
        buttonFirePlace.classList.remove('selected')
        controls.hideAllSliders()
        controls.showSlider(forest)
    
    
        if (buttonForest.classList.contains('selected')) {
            sounds.bgCafe.pause()
            sounds.bgFirePlace.pause()
            sounds.bgRain.pause()
            sounds.bgForest.play()
            sounds.defaultVolume()
        } else {
            sounds.pauseSounds()
            controls.hideAllSliders()
        }
    })
    buttonRain.addEventListener('click', function() {
        controls.selectButton(buttonRain)
        buttonCafe.classList.remove('selected')
        buttonFirePlace.classList.remove('selected')
        buttonForest.classList.remove('selected')
        controls.hideAllSliders()
        controls.showSlider(rain)
    
    
        if (buttonRain.classList.contains('selected')) {
            sounds.bgCafe.pause()
            sounds.bgFirePlace.pause()
            sounds.bgForest.pause()
            sounds.bgRain.play()
            sounds.defaultVolume()
        } else {
            sounds.pauseSounds()
            controls.hideAllSliders()
        }
    })
    buttonCafe.addEventListener('click', function() {
        controls.selectButton(buttonCafe)
        buttonForest.classList.remove('selected')
        buttonRain.classList.remove('selected')
        buttonFirePlace.classList.remove('selected')
        controls.hideAllSliders()
        controls.showSlider(cafe)
    
        
        if (buttonCafe.classList.contains('selected')) {
            sounds.bgFirePlace.pause()
            sounds.bgForest.pause()
            sounds.bgRain.pause()
            sounds.bgCafe.play()
            sounds.defaultVolume()
        } else {
            sounds.pauseSounds()
            controls.hideAllSliders()
        }
    })
    buttonFirePlace.addEventListener('click', function() {
        controls.selectButton(buttonFirePlace)
        buttonForest.classList.remove('selected')
        buttonRain.classList.remove('selected')
        buttonCafe.classList.remove('selected')
        controls.hideAllSliders()
        controls.showSlider(fireplace)
    
        if (buttonFirePlace.classList.contains('selected')) {
            sounds.bgForest.pause()
            sounds.bgRain.pause()
            sounds.bgCafe.pause()
            sounds.bgFirePlace.play()
            sounds.defaultVolume()
        } else {
            sounds.pauseSounds()
            controls.hideAllSliders()
        }
    })


    forestSlider.addEventListener("mousemove", function() {
        sounds.setVolume(forestSlider.value)
        console.log("a")
    })

    rainSlider.addEventListener("mousemove", function() {
        sounds.setVolume(rainSlider.value)
    })

    cafeSlider.addEventListener("mousemove", function() {
        sounds.setVolume(cafeSlider.value)
    })

    fireplaceSlider.addEventListener("mousemove", function() {
        sounds.setVolume(fireplaceSlider.value)
    })


    lightButton.addEventListener("click", function() {
        controls.darkModeOn()
     })
    
    darkButton.addEventListener("click", function() {
        controls.darkModeOff()
     })
    
    return
}