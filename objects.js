export { drawBoard, drawCircleState };
import { selectedO } from "./tictactoe.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;

export class DefineLine {
  constructor(startX, startY, endX, endY, thickness) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.thickness = thickness;
  }
}

export class DefineCircle {
  constructor(centerX, centerY, radius, startAngle, endAngle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }
}

export function resetCanvas() {
  canvas.width = 1000;
  canvas.height = 600;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export const circleObject = [
  // zone 1 (topleft)
  new DefineCircle(100, 100, 50, 0, 2 * Math.PI),
  // zone 2
  new DefineCircle(300, 100, 50, 0, 2 * Math.PI),
  // zone 3 (topright)
  new DefineCircle(500, 100, 50, 0, 2 * Math.PI),
  // zone 4
  new DefineCircle(100, 300, 50, 0, 2 * Math.PI),
  // zone 5
  new DefineCircle(300, 300, 50, 0, 2 * Math.PI),
  // zone 6
  new DefineCircle(500, 300, 50, 0, 2 * Math.PI),
  // zone 7 (bottomleft)
  new DefineCircle(100, 500, 50, 0, 2 * Math.PI),
  // zone 8
  new DefineCircle(300, 500, 50, 0, 2 * Math.PI),
  // zone 9 (bottomright)
  new DefineCircle(500, 500, 50, 0, 2 * Math.PI),
];

function drawBoard() {
  //Define lines
  const lines = [
    //X Lines
    new DefineLine(200, 25, 200, 575, 10),
    new DefineLine(400, 25, 400, 575, 10),
    //Y Lines
    new DefineLine(25, 200, 575, 200, 10),
    new DefineLine(25, 400, 575, 400, 10),
  ];
  //Line color white
  ctx.strokeStyle = "#FFFFFF";
  //Draw Board lines loop
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    ctx.beginPath();
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.lineWidth = line.thickness;
    ctx.stroke();
  }
}

function drawCircleState() {
  ctx.strokeStyle = "#FFFFFF";
  let i = 0;
  while (i < selectedO.length) {
    ctx.beginPath();
    ctx.arc(
      circleObject[selectedO[i]].centerX,
      circleObject[selectedO[i]].centerY,
      circleObject[selectedO[i]].radius,
      circleObject[selectedO[i]].startAngle,
      circleObject[selectedO[i]].endAngle
    );
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
    i++;
  }
}
