import { checkAround, isAlive, newBoard } from './position.js';

describe('Given an array element ', () => {
  describe('When the number is surrounded only by one', () => {
    test('Then the return value should be 8', () => {
      const input = [
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', 1, 1, 1, 1, 1, 1, 'X'],
        ['X', 1, 1, 1, 1, 1, 1, 'X'],
        ['X', 1, 1, 1, 1, 1, 1, 'X'],
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ];
      const array = 2;
      const item = 2;
      const result = checkAround(input, array, item);
      const expected = 8;
      expect(result).toBe(expected);
    });
  });
});

describe('Given an array element ', () => {
  describe('When the number is surrounded only by one', () => {
    test('Then the return value should be 8', () => {
      const input = [
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', 0, 0, 0, 1, 1, 1, 'X'],
        ['X', 0, 1, 0, 1, 1, 1, 'X'],
        ['X', 0, 0, 0, 1, 1, 1, 'X'],
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ];
      const array = 2;
      const item = 2;
      const result = checkAround(input, array, item);
      const expected = 0;
      expect(result).toBe(expected);
    });
  });
});

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

describe('Given a cell value of 1', () => {
  describe('When the alive account is 3 ', () => {
    test('Then the function should return 1', () => {
      const a = 3;
      const b = 1;
      const result = isAlive(a, b);
      const expected = 1;
      expect(result).toBe(expected);
    });
  });
});

describe('Given a cell value of 1', () => {
  describe('When the alive account is 2 ', () => {
    test('Then the function should return 1', () => {
      const a = 2;
      const b = 1;
      const result = isAlive(a, b);
      const expected = 1;
      expect(result).toBe(expected);
    });
  });
});

describe('Given a cell value of 1', () => {
  describe('When the alive account is 1 ', () => {
    test('Then the function should return 0', () => {
      const a = 1;
      const b = 1;
      const result = isAlive(a, b);
      const expected = 0;
      expect(result).toBe(expected);
    });
  });
});

describe('Given a cell value of 0', () => {
  describe('When the alive account is 3 ', () => {
    test('Then the function should return 1', () => {
      const input = [
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', 0, 0, 1, 0, 0, 0, 'X'],
        ['X', 0, 1, 0, 0, 1, 0, 'X'],
        ['X', 1, 1, 1, 0, 0, 0, 'X'],
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ];
      const result = newBoard(input);
      const expected = [
        [0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0],
      ];
      expect(result).toEqual(expected);
    });
  });
});
