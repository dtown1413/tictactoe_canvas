import { DefineLine } from "./objects.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;

//set canvas background and clear the canvas
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function DrawBoard() {
  //Define lines
  const lines = [
    //X Lines
    new DefineLine(200, 50, 200, 550, 10),
    new DefineLine(400, 50, 400, 550, 10),
    //Y Lines
    new DefineLine(50, 200, 550, 200, 10),
    new DefineLine(50, 400, 550, 400, 10),
  ];
  //Line color white
  ctx.strokeStyle = "#FFFFFF";
  //Draw lines
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    ctx.beginPath();
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.lineWidth = line.thickness;
    ctx.stroke();
  }
}

ctx.beginPath();
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

const powerButton = document.getElementById("powerButton");
powerButton.addEventListener("click", DrawBoard);
