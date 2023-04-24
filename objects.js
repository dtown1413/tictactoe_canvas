import { DefineLine, DefineCircle, DefineX, DefineZones } from "./classes.js";

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

export const XObject = [
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

export const lines = [
  //X Lines
  new DefineLine(200, 25, 200, 575, 10),
  new DefineLine(400, 25, 400, 575, 10),
  //Y Lines
  new DefineLine(25, 200, 575, 200, 10),
  new DefineLine(25, 400, 575, 400, 10),
];

export const zones = [
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

export const winConditions = {
  condition1: [0, 1, 2],
  condition2: [3, 4, 5],
  condition3: [6, 7, 8],
  condition4: [0, 3, 6],
  condition5: [1, 4, 7],
  condition6: [2, 5, 8],
  condition7: [0, 4, 8],
  condition8: [2, 4, 6],
};
