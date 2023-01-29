import { cellsGen } from './functions/board.js';
import { cellsSplice } from './functions/board.js';
import { frameCons } from './functions/board.js';

import { newBoard } from './functions/position.js';
import { initialChange } from './functions/initialChange.js';

const liveAction = (num) => {
  const initialBoard = frameCons(cellsSplice(cellsGen(24), 6));
  let board = initialChange(initialBoard, num);
  board = newBoard(board);
  setInterval(() => {
    board = newBoard(board);
  }, 200);
};

liveAction(24);
