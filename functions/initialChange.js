export const initialChange = (board, num) => {
  for (let i = 0; i < num; i++) {
    const a = Math.floor(Math.random() * 3) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    board[a][b] = 1;
  }

  return board;
};
