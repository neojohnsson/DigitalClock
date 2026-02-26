

const display = document.querySelector("#myDiv h1");
const daysDisplay = document.querySelector("#days h1:nth-of-type(2)");
const monthsDisplay = document.querySelector("#days h1:nth-of-type(1)");

let time = null;
let startTime = 0;
let elapsedTime = 0;

function startTimer() {
    if (time) {
        return;
    }
    
    // Check if there's a stored start time
    const storedStartTime = localStorage.getItem("timerStartTime");
    if (storedStartTime) {
        startTime = parseInt(storedStartTime);
    } else {
        startTime = Date.now() - elapsedTime;
        localStorage.setItem("timerStartTime", startTime);
    }
    
    time = requestAnimationFrame(updateTimer);
}

function pad(number)  {
    return number.toString().padStart(2, "0");
}

function updateTimer() {
    const currrentTime = Date.now();
    elapsedTime = currrentTime - startTime;
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