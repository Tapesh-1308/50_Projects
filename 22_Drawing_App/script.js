const canvas = document.getElementById("canvas");
const body = document.querySelector("body");

let lineW = 5;
let toDraw = false;
let prevX = null;
let prevY = null;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// setting bg color
const inputColor = document.getElementById("favcolor");
inputColor.addEventListener("input", () => {
    body.style.backgroundColor = inputColor.value;
});

// change size of brush
const sizeInput = document.getElementById("ageInputId");
const sizeOutput = document.getElementById("ageOutputId");


sizeInput.oninput = () => {
    draw = null;
    lineW = sizeInput.value;
    sizeOutput.innerText = lineW;
    ctx.lineWidth = lineW;
}

// setting context
const ctx = canvas.getContext("2d");
ctx.lineWidth = lineW;

// settting brush color
let colors = document.querySelectorAll(".clr");
colors.forEach((color) => {
    color.addEventListener("click", () => {
        ctx.strokeStyle = color.dataset.color;
        ctx.fillStyle = color.dataset.color;
    });
});


// clearing the canvas
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


// saving the canvas
const saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
    const data = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = data;
    link.download = "sketch.png";
    link.click();
});


// drawing
canvas.addEventListener("mousedown", () => toDraw = true);
canvas.addEventListener("mouseup", () => toDraw = false);
canvas.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !toDraw) {
        prevX = e.clientX;
        prevY = e.clientY;
        return;
    }

    const currentX = e.clientX;
    const currentY = e.clientY;

    ctx.beginPath();
    ctx.arc(currentX, currentY, lineW/2.5, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
});