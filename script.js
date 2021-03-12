'use strict'



updateTime();

let timerID = setInterval(() => {
    updateTime();
}, 1000);



function updateTime() {
    let date = new Date();
// let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = 'AM';

    if (hours > 12) {
        hours -= 12;
        period = 'PM';
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let clock = document.getElementById('clock');
    let time = hours + ':' + minutes + ':' + seconds + ' ' + period;
    clock.innerHTML = time;
}
