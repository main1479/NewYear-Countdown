function $(selector){
    const self = document.querySelector(selector)
    return self;
}

const days = $('#days')
const hours = $('#hours')
const mins = $('#mins')
const seconds = $('#seconds')
const nextYear = $('.next-year');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`Jan 01 ${currentYear + 1} 00:00:00`)
nextYear.innerHTML = currentYear + 1
function countdown(){
    const currentTime = new Date()
    const timeLeft = newYearTime - currentTime;

    const d = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    const h = Math.floor(timeLeft / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(timeLeft / 1000 / 60) % 60;
    const s = Math.floor(timeLeft / 1000) % 60;

    days.innerHTML = d 
    hours.innerHTML = h < 10 ? '0' + h : h;
    mins.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    
}

setInterval(countdown, 1000)