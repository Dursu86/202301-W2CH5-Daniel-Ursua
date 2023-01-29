import { initialChange } from './initialChange.js';

describe('Given an array only with zeros', () => {
  describe('When the function is applied with any number', () => {
    test('Then the length of the array should be the same', () => {
      const a = [
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['X', 0, 0, 0, 0, 0, 0, 'X'],
        ['X', 0, 0, 0, 0, 0, 0, 'X'],
        ['X', 0, 0, 0, 0, 0, 0, 'X'],
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
      ];
      const result = initialChange(a, 3).length;
      const expected = 5;
      expect(result).toBe(expected);
    });
  });
});
