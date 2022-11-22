import {rainSlider, fireplaceSlider, forestSlider, cafeSlider} from "./elements.js"

export default function () {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const bgForest = new Audio("https://cdn.discordapp.com/attachments/944629592327606273/1044397016576426085/Floresta.wav")
    const bgRain = new Audio("https://cdn.discordapp.com/attachments/944629592327606273/1044397016224116897/Chuva.wav")
    const bgCafe = new Audio("https://cdn.discordapp.com/attachments/944629592327606273/1044397016920375316/Cafeteria.wav")
    const bgFirePlace = new Audio("https://cdn.discordapp.com/attachments/944629592327606273/1044388222123389021/Lareira.wav")

    bgForest.loop = true
    bgRain.loop = true
    bgCafe.loop = true
    bgFirePlace.loop = true
    
    bgForest.volume = 0.5
    bgRain.volume = 0.5
    bgCafe.volume = 0.5
    bgFirePlace.volume = 0.5

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function pauseSounds() {
        bgCafe.pause()
        bgFirePlace.pause()
        bgRain.pause()
        bgForest.pause()
    }

    function setVolume(sliderValue) {
        switch(sliderValue) {
            case forestSlider.value:
                bgForest.volume = sliderValue
                break
            case rainSlider.value:
                bgRain.volume = sliderValue
                break
            case fireplaceSlider.value:
                bgFirePlace.volume = sliderValue
                break
            case cafeSlider.value: 
                bgCafe.volume = sliderValue
                break
            default: 
                console.log("erro em setvolume!")
        }
    }

    function defaultVolume() {
        bgForest.volume = 0.5
        bgRain.volume = 0.5
        bgCafe.volume = 0.5
        bgFirePlace.volume = 0.5

        cafeSlider.value = 0.5
        rainSlider.value = 0.5
        forestSlider.value = 0.5
        fireplaceSlider.value = 0.5

        console.log("aaa")
    }

    return {pressButton, timeEnd, pauseSounds, bgForest, bgRain, bgCafe, bgFirePlace, setVolume, defaultVolume}
}