import { cellsGen } from './functions/board.js';
import { cellsSplice } from './functions/board.js';
import { frameCons } from './functions/board.js';

import { newBoard } from './functions/position.js';
import { initialChange } from './functions/initialChange.js';

const liveAction = (num) => {
  const initialBoard = frameCons(cellsSplice(cellsGen(24), 6));
  initialBoard();
  const board = initialChange(initialBoard(), num);
  const actualBoard = newBoard(board);
  setInterval(newBoard(actualBoard), 200);
};

liveAction(24);
