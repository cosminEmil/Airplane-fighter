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


function areDivsTouching() {
    let rect1 = airplane.getBoundingClientRect();
    let rect2 = obstacle1.getBoundingClientRect();
    let rect3 = obstacle2.getBoundingClientRect();
  
    // Check if the airplane is touching the obstacles
    return (
      (rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top)  ||

      (rect1.left < rect3.right &&
      rect1.right > rect3.left &&
      rect1.top < rect3.bottom &&
      rect1.bottom > rect3.top) 
    );
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
