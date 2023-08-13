function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let interval = setInterval(function() {
        let obstacle1 = document.getElementById("obstacle1");
        let obstacle2 = document.getElementById("obstacle2");
        obstaclesMovement(obstacle1, "0px");
        obstaclesMovement(obstacle2, "-150px");
}, 5);

function obstaclesMovement(obstacle, startPoint) {
    obstacle.style.top = obstacle.offsetTop + 2 + "px";
    let newPos = randomIntFromInterval(450, 800);
    if (obstacle.style.top == "800px") {
        obstacle.style.top = startPoint;
        obstacle.style.left = newPos + "px"; 
    }
}

function areDivsTouching(obj1, obj2, obj3) {
    // Check collision
    if ((obj1.left < obj2.right && obj1.right > obj2.left && obj1.top < obj2.bottom && obj1.bottom > obj2.top)) {
        return 1;
    }

    if (obj1.left < obj3.right && obj1.right > obj3.left && obj1.top < obj3.bottom && obj1.bottom > obj3.top) {
        return 2;
    }
}

function destroyObstacles(bullet) {
    // Check if the bullet hit the obstacles
    let isDestroyed = areDivsTouching(bullet.getBoundingClientRect(), obstacle1.getBoundingClientRect(), obstacle2.getBoundingClientRect());
    if (isDestroyed) {
        let newPos = randomIntFromInterval(450, 800);
        if (isDestroyed == 1) {
            obstacle1.style.left = newPos + "px"; 
            obstacle1.style.top = "0px";
        } else {
            obstacle2.style.top = "-150px";
            obstacle2.style.left = newPos + "px";
        }
        bullet.remove();
        ++seconds;
    }
}

let reloadPageIfDivsTouch = setInterval(function() {
    let areDivsTouched = areDivsTouching(airplane.getBoundingClientRect(), obstacle1.getBoundingClientRect(), obstacle2.getBoundingClientRect())
    if (areDivsTouched) {
        alert("SCORE: " + seconds);
        obstacle1.style.top = "0px";
        obstacle2.style.top = "0px";
        window.location.reload();
        return 0;
    } 
}, 100);
