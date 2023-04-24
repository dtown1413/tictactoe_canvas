export {
  resetCanvas,
  drawBoard,
  drawTitle,
  drawScoreBoardShapes,
  drawScoreBoardText,
};
import { lines } from "./objects.js";
import { ctx, canvas } from "./tictactoe.js";

function resetCanvas() {
  canvas.width = 1000;
  canvas.height = 600;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBoard() {
  ctx.strokeStyle = "#00D619";
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    ctx.beginPath();
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.lineWidth = line.thickness;
    ctx.stroke();
  }
}

function drawTitle() {
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("Tic Tac Toe", 650, 50);
}

function drawScoreBoardShapes() {
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 5;
  //Turn Box
  ctx.strokeRect(600, 70, 375, 75);
  //Score Box
  ctx.strokeRect(600, 155, 375, 150);
  //New Game
  ctx.strokeRect(600, 315, 375, 75);
  //Reset Board
  ctx.strokeRect(600, 400, 375, 75);
  //Clear Score
  ctx.strokeRect(600, 485, 375, 75);
}

function drawScoreBoardText() {
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("X Wins: ", 610, 210);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("O Wins: ", 610, 280);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("New Game", 660, 370);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("Reset Board", 650, 455);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 48px sans-serif";
  ctx.fillText("Reset Score", 655, 540);
}
