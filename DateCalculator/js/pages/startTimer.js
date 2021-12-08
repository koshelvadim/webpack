import { getStop } from "../pages/timer.js";
import { zvuk, sound } from "../utils/getAudio.js";



const timerSecondsLink = document.querySelector('.timer-seconds');

function startTimer(time) {
    let setInt = setInterval(() => {
        if(time < 0) {
            clearInterval(setInt); 
            
        } else {
            if (time < 6) {
                timerSecondsLink.textContent = '0' + time;
                zvuk.play();  
                
                time--; 
            } else if (time < 10) {
                timerSecondsLink.textContent = '0' + time;
                sound.play();
                time--; 
            } else {
                timerSecondsLink.textContent = time;
                sound.play();
                time--; 
            }
        }
    }, 1000);
    getStop(setInt);
}

export { startTimer }