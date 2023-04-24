import { playGame, newGame, resetCanvas } from "./tictactoe.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
export let xClicked = 0;
export let yClicked = 0;

window.addEventListener("load", function () {
  newGame();
});

canvas.addEventListener("click", function (event) {
  xClicked = event.offsetX;
  yClicked = event.offsetY;
  playGame();
});

const powerButton = document.getElementById("powerButton");
powerButton.addEventListener("click", resetCanvas);
