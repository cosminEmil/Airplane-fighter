    //init object globally
    let objImage = null;
    function init() {
        objImage = document.getElementById("airplane");
        objImage.style.position = "relative";
        objImage.style.left = "550px";
        objImage.style.top = "400px";
    }
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 39: //right arrow key
                moveRight();
                break;
        }
    }
    function moveLeft() {
        objImage.style.left = parseInt(objImage.style.left) - 8 + "px";
    }
    function moveRight() {
        objImage.style.left = parseInt(objImage.style.left) + 8 + "px";
    }
    window.onload = init;
