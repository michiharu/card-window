import { __local__ } from './CardWindow';

const {
  getColumns,
  // getScrollContainerStyle,
  getRenderRowRange,
  getRenderContainerStyle,
  // getRenderItemProps,
  // getNextOffset
} = __local__;

describe('getColumns', () => {
  const height = 0;
  const y = 0;
  test('container.width < card.width', () => {
    expect(getColumns({ width: 100, height }, { width: 101, height }, { x: 0, y })).toBe(0);
  });
  test('1 column patterns', () => {
    expect(getColumns({ width: 100, height }, { width: 100, height }, { x: 0, y })).toBe(1);
    expect(getColumns({ width: 100, height }, { width: 90, height }, { x: 0, y })).toBe(1);
    expect(getColumns({ width: 100, height }, { width: 90, height }, { x: 10, y })).toBe(1);
    expect(getColumns({ width: 100, height }, { width: 100, height }, { x: 10, y })).toBe(1);
    expect(getColumns({ width: 200, height }, { width: 100, height }, { x: 10, y })).toBe(1);
  });

  test('many columns patterns', () => {
    expect(getColumns({ width: 200, height }, { width: 90, height }, { x: 10, y })).toBe(2);
    expect(getColumns({ width: 200, height }, { width: 60, height }, { x: 20, y })).toBe(2);
    expect(getColumns({ width: 200, height }, { width: 60, height }, { x: 11, y })).toBe(2);
    expect(getColumns({ width: 200, height }, { width: 60, height }, { x: 10, y })).toBe(3);
  });
});

describe('getRenderContainerStyle', () => {
  const width = 0;
  const x = 0;
  const justifyContent = 'space-evenly';
  test('row === 0, card.height: 100, spacing.y: 0', () => {
    const style = getRenderContainerStyle(0, { width, height: 100 }, { x, y: 0 }, justifyContent);
    expect(style.transform).toBe('translate(0, 0px)');
  });
  test('row === 0, card.height: 100, spacing.y: 10', () => {
    const style = getRenderContainerStyle(0, { width, height: 100 }, { x, y: 10 }, justifyContent);
    expect(style.transform).toBe('translate(0, 0px)');
  });
  test('row === 1, card.height: 100, spacing.y: 0', () => {
    const style = getRenderContainerStyle(1, { width, height: 100 }, { x, y: 0 }, justifyContent);
    expect(style.transform).toBe('translate(0, 100px)');
  });
  test('row === 1, card.height: 100, spacing.y: 10', () => {
    const style = getRenderContainerStyle(1, { width, height: 100 }, { x, y: 10 }, justifyContent);
    expect(style.transform).toBe('translate(0, 110px)');
  });
});

describe('getRenderRowRange', () => {
  const width = 0;
  const x = 0;
  test('container.height: 100, card.height: 100, spacing.y: 0', () => {
    expect(getRenderRowRange(0, 0, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([0, 1]);
    expect(getRenderRowRange(0, 1, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([0, 2]);
    expect(getRenderRowRange(0, 50, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([0, 2]);
    expect(getRenderRowRange(0, 51, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([0, 3]);
    expect(getRenderRowRange(1000, 0, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([10, 11]);
    expect(getRenderRowRange(1000, 1, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([9, 11]);
    expect(getRenderRowRange(1000, 50, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([9, 11]);
    expect(getRenderRowRange(1000, 51, { width, height: 100 }, { width, height: 100 }, { x, y: 0 })).toEqual([9, 12]);
  });
  test('container.height: 100, card.height: 100, spacing.y: 50', () => {
    // 1000 / (100 + 50) = 6.66
    expect(getRenderRowRange(1000, 0, { width, height: 100 }, { width, height: 100 }, { x, y: 50 })).toEqual([6, 7]);
    // (100 + 50 * 2) / (100 + 50) + 1 = 3
    expect(getRenderRowRange(1000, 50, { width, height: 100 }, { width, height: 100 }, { x, y: 50 })).toEqual([6, 8]);
  });
});
