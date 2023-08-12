let airplane = document.getElementById("airplane");
let position = {
    x:0
};

// movement
document.addEventListener("keydown", (event) => {
    let arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp"];
    let direction = "";
    if (arrowKeys.includes(event.key)) { // check wich arrow key is pressed
      direction = event.key.replace("Arrow", ""); 
    }

    if (!direction) { // it will not allow the airplane to move if there are any other keys pressed
        return; 
    }

    if (direction == "Left") {
        position.x -= 20; // if the left arrow key is pressed, the airplane will move 20px to the left
    } else if (direction == "Right") {
        position.x += 20; // if the right arrow key is pressed, the airplane will move 20px to the right 
    } else if (direction == "Up") {
        let rect1 = airplane.getBoundingClientRect();
        let bullet = document.createElement("div");
        bullet.classList.add("bulletStyle");
        bullet.style.left = rect1.x + 30 + "px";
        document.body.appendChild(bullet);
        let shooting = setInterval(function() {
                bullet.style.top = bullet.offsetTop - 2 + "px";
                if (bullet.style.top == "0px") {
                    bullet.remove();
                }
                destroyObstacles(bullet);
        }, 1);
    }
     airplane.style.transform = `translate(${position.x}px)`;
});
