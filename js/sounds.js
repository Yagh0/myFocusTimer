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
    return {pressButton, timeEnd, pauseSounds, bgForest, bgRain, bgCafe, bgFirePlace}
}