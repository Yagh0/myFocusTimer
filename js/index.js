import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {buttonPlay,
    buttonPause,
    minutesDisplay,
    secondsDisplay} from "./elements.js"

const controls = Controls({
    buttonPlay,
    buttonPause
})
const timer = Timer({minutesDisplay,
    secondsDisplay})
const sounds = Sounds()
    
Events({controls, timer, sounds})