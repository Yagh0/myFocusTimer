export default function Controls ({
    buttonPlay,
    buttonPause
}) {
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
    return {selectButton, resetControls, play, pause}
}