export const checkAround = (board, index, element) => {
  const around = [
    board[index][element - 1],
    board[index][element + 1],
    board[index - 1][element - 1],
    board[index - 1][element],
    board[index - 1][element + 1],
    board[index + 1][element - 1],
    board[index + 1][element],
    board[index + 1][element + 1],
  ];
  return around.filter((element) => element === 1).length;
};

export const isAlive = (aliveCount, cell) => {
  if (cell === 1 && (aliveCount === 2 || aliveCount === 3)) {
    return 1;
  }

  if (cell === 0 && aliveCount === 3) {
    return 1;
  }

  return 0;
};

export const newBoard = (board) => {
  const resultBoard = [];
  for (let i = 1; i < board.length - 1; i++) {
    const row = [];
    for (let j = 1; j < board[i].length - 1; j++) {
      const aliveCount = checkAround(board, i, j);
      const change = isAlive(aliveCount, board[i][j]);
      row.push(change);
    }

    resultBoard.push(row);
  }

  return resultBoard;
};
