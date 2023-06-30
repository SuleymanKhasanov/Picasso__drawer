const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("mode");

canvas.height = 700;
canvas.width = 600;

ctx.lineWidth = 2.5;
ctx.strokeStyle = "#000";
ctx.fillStyle = "#000";

let painting = false;
let filling = false;

function onMouseMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  painting = false;
}

function hendleColorClick(event) {
  let colors = event.target.style.backgroundColor;
  ctx.strokeStyle = colors;
  ctx.fillStyle = colors;
}

function hendleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, 600, 700);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", onMouseUp);
  canvas.addEventListener("click", hendleCanvasClick);
}

Array.from(colors).forEach((element) => element.addEventListener("click", hendleColorClick));

function hendleRangeChange(event) {
  let size = event.target.value;
  ctx.lineWidth = size;
}

if (range) {
  range.addEventListener("input", hendleRangeChange);
}

function hendleModeClick() {
  if (filling === true) {
    filling = false;
  } else {
    filling = true;
  }
}

if (mode) {
  mode.addEventListener("click", hendleModeClick);
}
