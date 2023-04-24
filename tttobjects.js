export {
  drawPlayerMovesState,
  playGame,
  displayScore,
  clearBoardPlays,
  displayTurn,
  newGame,
  handleZoneClick,
  drawScoreBoardText,
  drawScoreBoardShapes,
  drawTitle,
  drawBoard,
  drawCircleState,
  resetCanvas,
  drawXState,
  ctx,
  canvas,
};
import { xClicked, yClicked } from "./tictactoe.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.style.border = "5px solid orange";
canvas.width = 1000;
canvas.height = 600;
export let playerTurn = "";
let XWins = 0;
let OWins = 0;
let zonesPlayed = [];
//circles array for O player moves
let selectedO = [];
//circles array for O player moves
let selectedX = [];

class DefineLine {
  constructor(startX, startY, endX, endY, thickness) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.thickness = thickness;
  }
}

class DefineCircle {
  constructor(centerX, centerY, radius, startAngle, endAngle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
  }
}

function resetCanvas() {
  canvas.width = 1000;
  canvas.height = 600;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const circleObject = [
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
  ctx.strokeStyle = "#00D619";
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

class DefineX {
  constructor(
    startX,
    startY,
    endX,
    endY,
    thickness,
    startX2,
    startY2,
    endX2,
    endY2,
    thickness2
  ) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.thickness = thickness;
    this.startX2 = startX2;
    this.startY2 = startY2;
    this.endX2 = endX2;
    this.endY2 = endY2;
    this.thickness2 = thickness2;
  }
}

const XObject = [
  // zone 1 X (topleft)
  new DefineX(50, 50, 150, 150, 5, 50, 150, 150, 50, 5),
  // zone 2 X
  new DefineX(250, 50, 350, 150, 5, 250, 150, 350, 50, 5),
  // zone 3 X [4-5]
  new DefineX(450, 50, 550, 150, 5, 450, 150, 550, 50, 5),
  // zone 4 X [6-7]
  new DefineX(50, 250, 150, 350, 5, 50, 350, 150, 250, 5),
  // zone 5 X [8-9]
  new DefineX(250, 250, 350, 350, 5, 250, 350, 350, 250, 5),
  // zone 6 X [10-11]
  new DefineX(450, 250, 550, 350, 5, 450, 350, 550, 250, 5),
  // zone 7 X [12-13]
  new DefineX(50, 450, 150, 550, 5, 50, 550, 150, 450, 5),
  // zone 8 X [14-15]
  new DefineX(250, 450, 350, 550, 5, 250, 550, 350, 450, 5),
  // zone 9 X [16-17]
  new DefineX(450, 450, 550, 550, 5, 450, 550, 550, 450, 5),
];

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

class DefineZones {
  constructor(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
  }
}

const zones = [
  // zone 1
  new DefineZones(0, 0, 200, 200),
  // zone 2
  new DefineZones(200, 0, 400, 200),
  // zone 3
  new DefineZones(400, 0, 600, 200),
  // zone 4
  new DefineZones(0, 200, 200, 400),
  // zone 5
  new DefineZones(200, 200, 400, 400),
  // zone 6
  new DefineZones(400, 200, 600, 400),
  // zone 7
  new DefineZones(0, 400, 200, 600),
  // zone 8
  new DefineZones(200, 400, 400, 600),
  // zone 9
  new DefineZones(400, 400, 600, 600),
  // New Game
  new DefineZones(600, 315, 975, 390),
  // Reset Board
  new DefineZones(600, 400, 975, 475),
  // Reset Score
  new DefineZones(600, 485, 975, 560),
];

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

function resetScore() {
  XWins = 0;
  OWins = 0;
  displayScore();
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

function drawPlayerMovesState() {
  drawXState();
  drawCircleState();
}

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
    // Reset Board Clicked Check
  } else if (clickedZone === 11) {
    clearBoardPlays();
    //Reset Score Clicked Check
  } else if (clickedZone === 12) {
    resetScore();
  } else if (illegalMove === true || clickedZone === 0) {
    console.log("Illegal Move!");
    // Player X turn actions
  } else if (displayTurn() === "X") {
    selectedX.push(clickedZone - 1);
    zonesPlayed.push(clickedZone);
    drawPlayerMovesState();
    checkXWinCondition();
    drawScoreBoardText();
    displayTurn();
    // Player O turn actions
  } else {
    selectedO.push(clickedZone - 1);
    zonesPlayed.push(clickedZone);
    drawPlayerMovesState();
    checkOWinCondition();
    drawScoreBoardText();
    displayTurn();
  }
}

const winConditions = {
  condition1: [0, 1, 2],
  condition2: [3, 4, 5],
  condition3: [6, 7, 8],
  condition4: [0, 3, 6],
  condition5: [1, 4, 7],
  condition6: [2, 5, 8],
  condition7: [0, 4, 8],
  condition8: [2, 4, 6],
};

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
// //0,1,2
// //3,4,5
// //6,7,8
// //1,4,7
// //2,5,8
// //3,6,9
// //1,5,9
// //3,5,7
