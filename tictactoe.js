import {
  drawScoreBoard,
  drawTitle,
  getMousePos,
  drawBoard,
  resetCanvas,
  drawCircleState,
  ctx,
  drawXState,
  canvas,
} from "./objects.js";
resetCanvas();
//circles array for O player moves
export const selectedO = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//circles array for O player moves
export const selectedX = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
];

ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 48px sans-serif";
ctx.fillText("Player" + " X" + "'s " + "Turn", 610, 130);

ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 48px sans-serif";
ctx.fillText("X Wins: ", 610, 210);
ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 48px sans-serif";
ctx.fillText("Y Wins: ", 610, 280);

ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 48px sans-serif";
ctx.fillText("New Game", 660, 370);

ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 48px sans-serif";
ctx.fillText("Reset Board", 650, 455);

ctx.fillStyle = "#FFFFFF";
ctx.font = "bold 48px sans-serif";
ctx.fillText("Reset Score", 655, 540);

drawBoard();
drawCircleState();
drawXState();
drawTitle();
drawScoreBoard();

const powerButton = document.getElementById("powerButton");
powerButton.addEventListener("click", resetCanvas);

canvas.addEventListener("click", getMousePos(event));
