canvas = document.getElementById("canvas");

colour = "red";

ctx = canvas.getContext("2d");

width = screen.width;
height = screen.height;
console.log(width);
console.log(height);

new_width = width - 70;
new_height = height - 300;

if (width < 992) {
    document.getElementById("canvas").width = new_width;
    document.getElementById("canvas").height = new_height;
    document.body.style.overflow = "hidden";
}

lineWidth = 2;

console.log(colour);

var last_pos_of_X, last_pos_of_Y;

canvas.addEventListener("touchStart", mytouchStart);

function mytouchStart(e) {
    colour = document.getElementById("colour_input").value;
    lineWidth = document.getElementById("width_input").value;
    console.log("mytouchStart");
    last_pos_of_X = e.touches[0].clientX - canvas.offsetLeft;
    last_pos_of_y = e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("touchMove", mytouchMove);

function mytouchMove(e) {
    console.log("mymousmove");
    currentMouseX = e.touches[0] - canvas.offsetLeft;
    currentMouseY = e.touches[0] - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(last_pos_of_X, last_pos_of_Y);
    ctx.lineTo(currentMouseX, currentMouseY);
    ctx.stroke();
    last_pos_of_X = currentMouseX;
    last_pos_of_Y = currentMouseY;
}

function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}