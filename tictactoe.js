import { drawBoard, resetCanvas, drawCircleState } from "./objects.js";

//circles array for O player moves
export const selectedO = [];

//circles array for O player moves
export const selectedX = [];

resetCanvas();
drawBoard();
drawCircleState();

const powerButton = document.getElementById("powerButton");
powerButton.addEventListener("click", DrawBoard);
