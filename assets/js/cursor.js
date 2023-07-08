const body = document.querySelector("body")
const oldCursor = body.style.cursor;

body.addEventListener("mousedown", () => {
    body.style.cursor = "url('https://i.ibb.co/VY6m6Vq/gozador.png'), auto";
});

body.addEventListener("mouseup", () => {
    body.style.cursor = oldCursor;
});

document.addEventListener("touchmove", function (event) {
    var touch = event.touches[0];
    var customCursor = document.getElementById("custom-cursor");

    customCursor.style.display = "block";
    customCursor.style.left = touch.pageX + "px";
    customCursor.style.top = touch.pageY + "px";
});

document.addEventListener("touchend", function () {
    var customCursor = document.getElementById("custom-cursor");
    customCursor.style.display = "none";
});
