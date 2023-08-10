
function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let interval = setInterval(function() {
        let obstacle1 = document.getElementById("obstacle1");
        let obstacle2 = document.getElementById("obstacle2");
        obstacle1.style.top = obstacle1.offsetTop + 2 + "px";
        obstacle2.style.top = obstacle2.offsetTop + 2 + "px";
        if (obstacle1.style.top == "800px") {
            let pos1 = randomIntFromInterval(450, 800);
            obstacle1.style.top = "0px";
            obstacle1.style.left = pos1 + "px"; 
        }
        if (obstacle2.style.top == "800px") {
            let pos2 = randomIntFromInterval(450, 800);
            obstacle2.style.top = "-150px";
            obstacle2.style.left = pos2 + "px";
        }
}, 5);


function bulletTouch() {
    let bulletRect = bullet.getBoundingClientRect();
    let obstacle1Rect = obstacle1.getBoundingClientRect();
    let obstacle2Rect = obstacle2.getBoundingClientRect();
    
    if (bulletRect.left < obstacle1Rect.right && bulletRect.right > obstacle1Rect.left && bulletRect.top < obstacle1Rect.bottom && bulletRect.bottom > obstacle1Rect.top) {
            return 1;
    }
    if (bulletRect.left < obstacle2Rect.right && bulletRect.right > obstacle2Rect.left && bulletRect.top < obstacle2Rect.bottom && bulletRect.bottom > obstacle2Rect.top) {
            return 2;
    }
}

function areDivsTouching() {
    let airplaneRect = airplane.getBoundingClientRect();
    let obstacle1Rect = obstacle1.getBoundingClientRect();
    let obstacle2Rect = obstacle2.getBoundingClientRect();

    // Check if the airplane is touching the obstacles
    return (
      (airplaneRect.left < obstacle1Rect.right && airplaneRect.right > obstacle1Rect.left &&
        airplaneRect.top < obstacle1Rect.bottom &&
        airplaneRect.bottom > obstacle1Rect.top)  ||

      (airplaneRect.left < obstacle2Rect.right &&
        airplaneRect.right > obstacle2Rect.left &&
        airplaneRect.top < obstacle2Rect.bottom &&
        airplaneRect.bottom > obstacle2Rect.top) 
    );
}

function destroyObstacles() {
    if (bulletTouch() == 1) {
        let pos1 = randomIntFromInterval(450, 800);
        obstacle1.style.left = pos1 + "px"; 
        obstacle1.style.top = "0px";
        bullet.remove();
        ++seconds;
    } else if (bulletTouch() == 2) {
        let pos2 = randomIntFromInterval(450, 800);
        obstacle2.style.top = "-150px";
        obstacle2.style.left = pos2 + "px";
        bullet.remove();
        ++seconds;
    }
}

function reloadPageIfDivsTouch() {
    if (areDivsTouching()) {
        alert("SCORE: " + seconds);
        obstacle1.style.top = "0px";
        obstacle2.style.top = "0px";
        window.location.reload();
        return 0;
    } 
}

setInterval(reloadPageIfDivsTouch, 100);
setInterval(destroyObstacles, 100);
