let seconds = 0;
let secondsCnt = document.getElementById("seconds-counter");

function incrementSeconds() {
    ++seconds;
    secondsCnt.innerText = seconds;
}

let cancel = setInterval(incrementSeconds, 1000);