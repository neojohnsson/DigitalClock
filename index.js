

const display = document.querySelector("#myDiv h1");
const daysDisplay = document.querySelector("#months");
const monthsDisplay = document.querySelector("#daysCount");

let time = null;

// Fixed start date - change this to when you want the timer to start
const FIXED_START_TIME = new Date("2026-02-26").getTime();

function startTimer() {
    time = requestAnimationFrame(updateTimer);
}

function pad(number)  {
    return number.toString().padStart(2, "0");
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - FIXED_START_TIME;
    const months = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    monthsDisplay.textContent = `${months} Months`;
    daysDisplay.textContent = `${days} Days`;
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    time = requestAnimationFrame(updateTimer);
}

startTimer();