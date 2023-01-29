import { cellsGen } from './board';

describe('Given a number ', () => {
  describe('When the number is 2', () => {
    test('Then the length of the array should be 20', () => {
      const a = 2;
      const result = cellsGen(a);
      const expected = [0, 0];
      expect(result).toEqual(expected);
    });
  });
});

import { cellsSplice } from './board';

describe('Given an array and a number ', () => {
  describe('When the number is 2 and the array was [0, 0, 0, 0]', () => {
    test('Then the result should be [[0, 0], [0, 0]]', () => {
      const a = [0, 0, 0, 0];
      const b = 2;
      const result = cellsSplice(a, b);
      const expected = [
        [0, 0],
        [0, 0],
      ];
      expect(result).toEqual(expected);
    });
  });
});

import { frameCons } from './board';

describe('Given an array', () => {
  describe('When the array was [[0, 0],[0, 0]] ', () => {
    test('Then the length of the rowX should be the length of one element of the array', () => {
      const a = [
        [0, 0],
        [0, 0],
      ];
      const b = frameCons(a);
      const result = b[0];
      const expected = ['x', 'x', 'x', 'x'];
      expect(result).toEqual(expected);
    });
  });
});

describe('Given an array', () => {
  describe('When the array was [[0, 0],[0, 0]] ', () => {
    test('Then the length of the rowX should be the length of one element of the array', () => {
      const a = [
        [0, 0],
        [0, 0],
      ];
      const b = frameCons(a);
      const result = b[b.length - 1];
      const expected = ['x', 'x', 'x', 'x'];
      expect(result).toEqual(expected);
    });
  });
});
