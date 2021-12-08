import "../pages/dateCalc.js";
import "../pages/timer.js";

const calcPage = document.querySelector('.calc');
const timerPage = document.querySelector('.timer');

document.querySelectorAll('.nav').forEach((el) => el.addEventListener('click', function(event){
    event.preventDefault();
    if  (event.target.dataset.name === 'calc') { 
        timerPage.classList.add('visible');
        calcPage.classList.remove('visible');
        } else {
        calcPage.classList.add('visible');
        timerPage.classList.remove('visible');
        }
    })
);
