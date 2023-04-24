export { playGame, newGame, resetCanvas, canvas, ctx, OWins, XWins };
import { xClicked, yClicked } from "./canvas.js";
import { circleObject, XObject, winConditions, zones } from "./objects.js";
import {
  resetCanvas,
  drawBoard,
  drawTitle,
  drawScoreBoardShapes,
  drawScoreBoardText,
} from "./functions.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.style.border = "5px solid orange";
canvas.width = 1000;
canvas.height = 600;

let playerTurn = "";
let XWins = 0;
let OWins = 0;
let zonesPlayed = [];
let selectedO = [];
let selectedX = [];

function playGame() {
  displayTurn();
  drawPlayerMovesState();
  let clickedZone = handleZoneClick();
  let illegalMove = false;
  if (zonesPlayed.includes(clickedZone)) {
    illegalMove = true;
  }
  if (clickedZone === 10) {
    newGame();
  } else if (clickedZone === 11) {
    clearBoardPlays();
  } else if (clickedZone === 12) {
    resetScore();
  } else if (illegalMove === true || clickedZone === 0) {
    console.log("Illegal Move!");
  } else if (displayTurn() === "X") {
    selectedX.push(clickedZone - 1);
    zonesPlayed.push(clickedZone);
    drawPlayerMovesState();
    checkXWinCondition();
    drawScoreBoardText();
    displayTurn();
  } else {
    selectedO.push(clickedZone - 1);
    zonesPlayed.push(clickedZone);
    drawPlayerMovesState();
    checkOWinCondition();
    drawScoreBoardText();
    displayTurn();
  }
}

function checkXWinCondition() {
  for (const key in winConditions) {
    if (winConditions.hasOwnProperty(key)) {
      const requiredValues = winConditions[key];
      if (requiredValues.every((value) => selectedX.includes(value))) {
        XWins++;
        clearBoardPlays();
      }
    }
  }
}

function checkOWinCondition() {
  for (const key in winConditions) {
    if (winConditions.hasOwnProperty(key)) {
      const requiredValues = winConditions[key];
      if (requiredValues.every((value) => selectedO.includes(value))) {
        OWins++;
        clearBoardPlays();
      }
    }
  }
}

function drawXState() {
  ctx.strokeStyle = "#00AAD6";
  let i = 0;
  while (i < selectedX.length) {
    ctx.beginPath();
    ctx.moveTo(XObject[selectedX[i]].startX, XObject[selectedX[i]].startY);
    ctx.lineTo(XObject[selectedX[i]].endX, XObject[selectedX[i]].endY);
    ctx.lineWidth = XObject[selectedX[i]].thickness;
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(XObject[selectedX[i]].startX2, XObject[selectedX[i]].startY2);
    ctx.lineTo(XObject[selectedX[i]].endX2, XObject[selectedX[i]].endY2);
    ctx.lineWidth = XObject[selectedX[i]].thickness2;
    ctx.stroke();
    ctx.closePath();
    i++;
  }
}

function drawCircleState() {
  ctx.strokeStyle = "#C3D600";
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

function newGame() {
  resetCanvas();
  drawScoreBoardText();
  drawScoreBoardShapes();
  drawBoard();
  drawTitle();
  clearBoardPlays();
  resetScore();
  displayTurn();
  displayScore();
}

function clearBoardPlays() {
  selectedO.splice(0, selectedO.length);
  selectedX.splice(0, selectedX.length);
  zonesPlayed.splice(0, zonesPlayed.length);
  resetCanvas();
  drawScoreBoardText();
  drawScoreBoardShapes();
  drawBoard();
  drawTitle();
  drawPlayerMovesState();
  displayTurn();
  displayScore();
}

function handleZoneClick() {
  let zoneNumber = 0;
  for (let i = 0; i < zones.length; i++) {
    if (
      xClicked > zones[i].startX &&
      xClicked < zones[i].endX &&
      yClicked > zones[i].startY &&
      yClicked < zones[i].endY
    ) {
      zoneNumber += i + 1;
    }
  }
  return zoneNumber;
}

function resetScore() {
  XWins = 0;
  OWins = 0;
  displayScore();
}

function drawPlayerMovesState() {
  drawXState();
  drawCircleState();
}

function displayTurn() {
  if (zonesPlayed.length % 2 === 0) {
    ctx.fillStyle = "#000000";
    ctx.font = "bold 48px sans-serif";
    ctx.fillRect(605, 80, 355, 60);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 48px sans-serif";
    ctx.fillText("Player X's Turn", 610, 130);
    playerTurn = "X";
  } else {
    ctx.fillStyle = "#000000";
    ctx.font = "bold 48px sans-serif";
    ctx.fillRect(605, 80, 355, 60);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 48px sans-serif";
    ctx.fillText("Player O's Turn", 610, 130);
    playerTurn = "O";
  }
  return playerTurn;
}

function displayScore() {
  ctx.fillStyle = "#000000";
  ctx.font = "bold 48px sans-serif";
  ctx.fillRect(800, 170, 160, 60);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(XWins, 800, 210);
  ctx.fillStyle = "#000000";
  ctx.fillRect(800, 240, 160, 60);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText(OWins, 800, 280);
}
