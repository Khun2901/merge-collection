import { merge } from '../src/merge';

describe('merge - branch coverage', () => {
  it('picks from collection_1 when it has the smallest head', () => {
    expect(merge([0], [5], [5])).toEqual([0, 5, 5]);
  });

  it('picks from collection_2 when it has the smallest head', () => {
    expect(merge([5], [0], [5])).toEqual([0, 5, 5]);
  });

  it('picks from collection_3 when it has the smallest head', () => {
    expect(merge([5], [5], [0])).toEqual([0, 5, 5]);
  });

  it('switches between all three collections and exhausts each one', () => {
    expect(merge([0, 3, 5, 9], [10, 7, 4, 1, 0], [2, 6, 8, 11])).toEqual([
      0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ]);
  });
});

describe('merge - edge cases', () => {
  it('returns an empty array when all collections are empty', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it('returns collection_1 when it is the only non-empty input', () => {
    expect(merge([0, 1, 2], [], [])).toEqual([0, 1, 2]);
  });

  it('returns collection_2 reversed when it is the only non-empty input', () => {
    expect(merge([], [2, 1, 0], [])).toEqual([0, 1, 2]);
  });

  it('returns collection_3 when it is the only non-empty input', () => {
    expect(merge([], [], [0, 1, 2])).toEqual([0, 1, 2]);
  });

  it('keeps every value when all values are zero', () => {
    expect(merge([0, 0], [0], [0, 0, 0])).toEqual([0, 0, 0, 0, 0, 0]);
  });

  it('keeps duplicate values within and across collections', () => {
    expect(merge([1, 1, 3], [3, 1, 1], [1, 3, 3])).toEqual([1, 1, 1, 1, 1, 3, 3, 3, 3]);
  });

  it('continues correctly after one collection runs out first', () => {
    expect(merge([20, 21], [11, 10], [0, 1])).toEqual([0, 1, 10, 11, 20, 21]);
  });

  it('handles collections of very different lengths', () => {
    expect(merge([100], [5, 4, 3, 2, 1, 0], [50])).toEqual([0, 1, 2, 3, 4, 5, 50, 100]);
  });

  it('does not mutate the input arrays', () => {
    const c1 = [0, 2, 4];
    const c2 = [5, 3, 1];
    const c3 = [0, 6];
    merge(c1, c2, c3);
    expect(c1).toEqual([0, 2, 4]);
    expect(c2).toEqual([5, 3, 1]);
    expect(c3).toEqual([0, 6]);
  });
});
