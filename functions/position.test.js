// Import { checkAround } from './position.js';

// describe('Given an array element ', () => {
//   describe('When the number is surrounded by two numbers one', () => {
//     test('Then the length of the return array should be 2', () => {
//       const a = 2;
//       const result = cellsGen(a);
//       const expected = [0, 0];
//       expect(result).toEqual(expected);
//     });
//   });
// });

import { isAlive } from './board';
describe('Given a cell value of 0', () => {
  describe('When the alive account is 3 ', () => {
    test('Then the function should return 1', () => {
      const a = 3;
      const b = 0;
      const result = isAlive(a, b);
      const expected = 1;
      expect(result).toBe(expected);
    });
  });
});

import { newBoard } from './board';
describe('Given a cell value of 0', () => {
  describe('When the alive account is 3 ', () => {
    test('Then the function should return 1', () => {
      const a = 3;
      const b = 0;
      const result = newBoard(a, b);
      const expected = 1;
      expect(result).toBe(expected);
    });
  });
});
