import {page, lightButton, darkButton, forestSlider, rainSlider, cafeSlider, fireplaceSlider} from "./elements.js"

export default function Controls ({
    buttonPlay,
    buttonPause
}) {



    function showSlider(slider) {
        switch (slider) {
            case forest:
                forestSlider.classList.remove("hide")
                break
            case rain:
                rainSlider.classList.remove('hide')
                break
            case cafe:
                cafeSlider.classList.remove('hide')
                break
            case fireplace:
                fireplaceSlider.classList.remove('hide')
                break
            default:
                console.log("erro em showslider!")
        }
    }

    function hideAllSliders() {
            forestSlider.classList.add('hide')
            rainSlider.classList.add('hide')
            cafeSlider.classList.add('hide')
            fireplaceSlider.classList.add('hide')
        }

    function selectButton(button) {
        if(button.classList.contains('selected')) {
            button.classList.remove('selected')
            return
        }
        button.classList.add('selected')
    }
    
    function resetControls() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function darkModeOn() {
        page.classList.add("darkmode")
        lightButton.classList.add("hide")
        darkButton.classList.remove("hide")
    }

    function darkModeOff() {
        page.classList.remove("darkmode")
        lightButton.classList.remove("hide")
        darkButton.classList.add("hide")
    }

    return {selectButton, resetControls, play, pause, darkModeOn, darkModeOff, showSlider, hideAllSliders}
}