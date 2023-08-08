let airplane = document.querySelector("#airplane");
let position = {
    x:0, y:0
};

// movement
document.addEventListener("keydown", (event) => {
    let arrowKeys = ["ArrowLeft", "ArrowRight"];
    let direction = "";
    
    if (arrowKeys.includes(event.key)) { // check wich arrow key is pressed
      direction = event.key.replace("Arrow", ""); 
    }

    if (!direction) { // it will not allow the airplane to move if there are any other keys pressed besides left arrow key and right arrow key
        return; 
    }

    if (direction == "Left") {
        position.x -= 20; // if the left arrow key is pressed, the airplane will move 20px to the left
    } else {
        position.x += 20; // if the right arrow key is pressed, the airplane will move 20px to the right 
    }
  
     airplane.style.transform = `translate(${position.x}px, ${position.y}px)`;
});