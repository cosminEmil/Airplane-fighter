let seconds = 0;
let secondsCnt = document.getElementById("secondsCounter");

let secondsInterval = setInterval(function() {
    secondsCnt.innerText = seconds;
}, 1);
