/*const body = document.querySelector("body")
const oldCursor = body.style.cursor;

body.addEventListener("mousedown", () => {
    body.style.cursor = "url('https://i.ibb.co/VY6m6Vq/gozador.png'), auto";
});

body.addEventListener("mouseup", () => {
    body.style.cursor = oldCursor;
});

document.addEventListener("touchstart", function (event) {
    var touch = event.touches[0];
    var follower = document.getElementById("follower");

    follower.style.display = "block";
    follower.style.left = touch.pageX + "px";
    follower.style.top = touch.pageY + "px";
});

document.addEventListener("touchmove", function (event) {
    var touch = event.touches[0];
    var follower = document.getElementById("follower");

    follower.style.left = touch.pageX + "px";
    follower.style.top = touch.pageY + "px";
});

document.addEventListener("touchend", function () {
    var follower = document.getElementById("follower");
    follower.style.display = "none";
});
