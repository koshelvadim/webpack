import { printError } from "../utils/print.js";
import { startTimer } from "../pages/startTimer.js";

const inputTimer = document.querySelector('#setTimer');
const buttonStart = document.querySelector('.btn-start');
const buttonStop = document.querySelector('.btn-stop');
const output = document.querySelector('.out-timer');

buttonStart.addEventListener('click', () => {
    if(inputTimer.value == '') {
        printError('Ошибка, заполните поля таймера!', output)
    } else if (inputTimer.value == '0'){
        printError('Ошибка, введите таймер больше нуля!', output)
    }
    else {
        inputTimer.setAttribute('disabled', 'disabled');
        let time = Number(inputTimer.value);
        printError('',output);
        startTimer(time);
        let setTime = setTimeout(() => {
            inputTimer.removeAttribute('disabled');
        }, time * 1000 + 1000);
    }
});

function getStop(setInt, setTime) { 
    buttonStop.addEventListener('click', () => {
    clearInterval(setInt);
    clearTimeout(setTime);
    }
)};

export { getStop }