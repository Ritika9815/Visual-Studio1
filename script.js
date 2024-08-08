const box = document.getElementById("box");
let pos = 0;
let direction = 1;

function moveBox() {
    pos += 2 * direction;
    if (pos > window.innerWidth - 100 || pos < 0) {
        direction *= -1;
    }
    box.style.left = pos + 'px';
    requestAnimationFrame(moveBox);
}

moveBox();
