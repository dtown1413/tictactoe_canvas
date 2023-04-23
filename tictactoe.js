import {
  handleZoneClick,
  drawScoreBoardText,
  drawScoreBoardShapes,
  drawTitle,
  drawBoard,
  resetCanvas,
  drawCircleState,
  ctx,
  drawXState,
  canvas,
} from "./objects.js";
resetCanvas();

let XWins = 0;
let OWins = 0;
let zonesPlayed = [];
//circles array for O player moves
export let selectedO = [];
//circles array for O player moves
export let selectedX = [];

function handleTurn() {
  if (zonesPlayed.length === 0) {
    if (typeof clickedZone === "number") {
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 48px sans-serif";
      ctx.fillText("Player X's Turn", 610, 130);
      zonesPlayed.push(handleZoneClick() - 1);
      selectedX.push(handleZoneClick() - 1);
    } else {
      console.log("Invalid zone clicked");
    }
  } else {
    console.log("Zone already played");
  }
  console.log(zonesPlayed);
  console.log(selectedX);
}

function checkOWinCondition() {}
//0,1,2
//3,4,5
//6,7,8
//1,4,7
//2,5,8
//3,6,9
//1,5,9
//3,5,7

function checkXWinCondition() {}
//0,1,2
//3,4,5
//6,7,8
//1,4,7
//2,5,8
//3,6,9
//1,5,9
//3,5,7

function checkIllegalMove() {}

drawScoreBoardText();
drawScoreBoardShapes();
drawBoard();
drawTitle();
drawCircleState();
drawXState();
canvas.addEventListener("click", handleTurn);
const powerButton = document.getElementById("powerButton");
powerButton.addEventListener("click", resetCanvas);
