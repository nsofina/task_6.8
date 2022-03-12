const trafficLightEl = document.querySelector('#allEl');

const greenEl = document.querySelector('#green');
const yellowEl = document.querySelector('#yellow');
const redEl = document.querySelector('#red');

function makeGreen() {
    greenEl.style.background = ('green');
    redEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    yellowEl.style.background = ('yellow');
    greenEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    redEl.style.background = ('red');
    yellowEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);