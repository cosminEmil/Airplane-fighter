let seconds = 0;
let secondsCnt = document.getElementById("seconds-counter");

let secondsInterval = setInterval(function() {
    if (obstacle1.style.top == "600px" || obstacle2.style.top == "600px") {
        ++seconds;
    }
    secondsCnt.innerText = seconds;
}, 0.1);
