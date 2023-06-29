const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 700;
canvas.width = 600;

ctx.lineWidth = 2.5;
ctx.strokeStyle = "#000";

let painting = false;

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

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", onMouseUp);
}
