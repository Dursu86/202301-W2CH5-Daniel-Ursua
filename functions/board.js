export const cellsGen = (num) => {
  const totalCells = [];
  for (let i = 0; i < num; i++) {
    totalCells.push(0);
  }

  return totalCells;
};

export const cellsSplice = (arr, rowLength) => {
  const boardCells = [];
  for (let i = 0; i < arr.length; i += rowLength) {
    const row = arr.slice(i, i + rowLength);
    boardCells.push(row);
  }

  return boardCells;
};

export const frameCons = (arr) => {
  const rowX = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].push('x');
    arr[i].unshift('x');
  }

  for (let i = 0; i < arr[0].length; i++) {
    rowX.push('x');
  }

  arr.unshift(rowX);
  arr.push(rowX);

  return arr;
};
