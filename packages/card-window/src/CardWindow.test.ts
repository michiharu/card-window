import { functions } from './CardWindow';

import { LoadingCard, LoadingRow, Rect, Spacing } from '.';

const {
  getColumns,
  getScrollContainerHeight,
  getRenderFirstRow,
  getRenderRows,
  getLastRow,
  getRenderLastRow,
  // getRenderRowRange,
  range,
  // getItemProps,
  // getNextOffset,
} = functions;

describe('getColumns', () => {
  const height = 0;
  const spacing = { y: 0, top: 0, bottom: 0 };

  describe('justifyContent: not space-evenly', () => {
    const justifyContent = 'center';
    test('container.width < card.width', () => {
      expect(getColumns({ width: 100, height }, { width: 101, height }, { ...spacing, x: 0 }, justifyContent)).toBe(0);
    });
    test('1 column patterns', () => {
      expect(getColumns({ width: 100, height }, { width: 100, height }, { ...spacing, x: 0 }, justifyContent)).toBe(1);
      expect(getColumns({ width: 100, height }, { width: 90, height }, { ...spacing, x: 0 }, justifyContent)).toBe(1);
      expect(getColumns({ width: 100, height }, { width: 90, height }, { ...spacing, x: 10 }, justifyContent)).toBe(1);
      expect(getColumns({ width: 100, height }, { width: 100, height }, { ...spacing, x: 10 }, justifyContent)).toBe(1);
      expect(getColumns({ width: 200, height }, { width: 100, height }, { ...spacing, x: 10 }, justifyContent)).toBe(1);
    });

    test('many columns patterns', () => {
      expect(getColumns({ width: 200, height }, { width: 90, height }, { ...spacing, x: 10 }, justifyContent)).toBe(2);
      expect(getColumns({ width: 200, height }, { width: 60, height }, { ...spacing, x: 20 }, justifyContent)).toBe(2);
      expect(getColumns({ width: 200, height }, { width: 60, height }, { ...spacing, x: 11 }, justifyContent)).toBe(2);
      expect(getColumns({ width: 200, height }, { width: 60, height }, { ...spacing, x: 10 }, justifyContent)).toBe(3);
    });
  });
  describe('justifyContent: space-evenly', () => {
    const justifyContent = 'space-evenly';
    test('container.width < card.width', () => {
      expect(getColumns({ width: 100, height }, { width: 101, height }, { ...spacing, x: 0 }, justifyContent)).toBe(0);
    });
    test('1 column: 200 < 90 * 2 + 10 * 3', () => {
      expect(getColumns({ width: 200, height }, { width: 90, height }, { ...spacing, x: 10 }, justifyContent)).toBe(1);
    });

    test('2 columns pattern: 200 < 80 * 2 + 10 * 3', () => {
      expect(getColumns({ width: 200, height }, { width: 80, height }, { ...spacing, x: 10 }, justifyContent)).toBe(2);
    });
  });
});

describe('getScrollContainerHeight', () => {
  const card: Rect = { width: 0, height: 100 };
  const spacing: Spacing = { x: 0, y: 10, top: 10, bottom: 10 };
  describe('!loading', () => {
    const loading = undefined;
    test('length: 0', () => expect(getScrollContainerHeight(3, 0, card, spacing, loading)).toBe(20));
    test('length: 1', () => expect(getScrollContainerHeight(3, 1, card, spacing, loading)).toBe(120));
    test('length: 2', () => expect(getScrollContainerHeight(3, 2, card, spacing, loading)).toBe(120));
    test('length: 3', () => expect(getScrollContainerHeight(3, 3, card, spacing, loading)).toBe(120));
    test('length: 4', () => expect(getScrollContainerHeight(3, 4, card, spacing, loading)).toBe(230));
  });
  describe(`loading.type: 'card'`, () => {
    const loading: LoadingCard = { type: 'card', LoadingComponent: () => null };
    test('length: 0', () => expect(getScrollContainerHeight(3, 0, card, spacing, loading)).toBe(120));
    test('length: 1', () => expect(getScrollContainerHeight(3, 1, card, spacing, loading)).toBe(120));
    test('length: 2', () => expect(getScrollContainerHeight(3, 2, card, spacing, loading)).toBe(120));
    test('length: 3', () => expect(getScrollContainerHeight(3, 3, card, spacing, loading)).toBe(230));
  });
  describe(`loading.type: 'row'`, () => {
    const loading: LoadingRow = { type: 'row', height: 50, LoadingComponent: () => null };
    test('length: 0', () => expect(getScrollContainerHeight(3, 0, card, spacing, loading)).toBe(70));
    test('length: 1', () => expect(getScrollContainerHeight(3, 1, card, spacing, loading)).toBe(180));
    test('length: 2', () => expect(getScrollContainerHeight(3, 2, card, spacing, loading)).toBe(180));
    test('length: 3', () => expect(getScrollContainerHeight(3, 3, card, spacing, loading)).toBe(180));
    test('length: 4', () => expect(getScrollContainerHeight(3, 4, card, spacing, loading)).toBe(290));
  });
});

describe('getRenderFirstRow', () => {
  const card: Rect = { width: 0, height: 100 };
  const spacing: Spacing = { x: 0, y: 10, top: 10, bottom: 10 };
  test.each`
    offset | overScanPx | expected
    ${0}   | ${0}       | ${0}
    ${109} | ${0}       | ${0}
    ${110} | ${0}       | ${1}
    ${219} | ${0}       | ${1}
    ${220} | ${0}       | ${2}
    ${0}   | ${200}     | ${0}
    ${309} | ${200}     | ${0}
    ${310} | ${200}     | ${1}
    ${419} | ${200}     | ${1}
    ${420} | ${200}     | ${2}
  `('offset: $offset, overScanPx: $overScanPx', ({ offset, overScanPx, expected }) =>
    expect(getRenderFirstRow(offset, overScanPx, card, spacing)).toEqual(expected)
  );
});

describe('getRenderRows', () => {
  const container: Rect = { width: 0, height: 300 };
  const card: Rect = { width: 0, height: 100 };
  const spacing: Spacing = { x: 0, y: 10, top: 10, bottom: 10 };
  test('container.height: 300, overScanPx:   0', () => expect(getRenderRows(0, container, card, spacing)).toEqual(3));
  test('container.height: 300, overScanPx: 200', () => expect(getRenderRows(200, container, card, spacing)).toEqual(7));
});

describe('getLastRow', () => {
  describe('loadingCard: false', () => {
    const loadingCard = false;
    test.each`
      length | expected
      ${0}   | ${0}
      ${1}   | ${0}
      ${2}   | ${0}
      ${3}   | ${0}
      ${4}   | ${1}
    `('length: $length', ({ length, expected }) => expect(getLastRow(length, 3, loadingCard)).toEqual(expected));
  });

  describe('loadingCard: true', () => {
    const loadingCard = true;
    test.each`
      length | expected
      ${0}   | ${0}
      ${1}   | ${0}
      ${2}   | ${0}
      ${3}   | ${1}
      ${4}   | ${1}
    `('length: $length', ({ length, expected }) => expect(getLastRow(length, 3, loadingCard)).toEqual(expected));
  });
});

test('getRenderLastRow', () => {
  expect(getRenderLastRow(0, 3, 3)).toEqual(3);
});

describe('range', () => {
  test('range(x)', () => {
    expect(range(1)).toEqual([0]);
    expect(range(2)).toEqual([0, 1]);
    expect(range(3)).toEqual([0, 1, 2]);
  });

  test('range(x, y)', () => {
    expect(range(0, 1)).toEqual([0]);
    expect(range(0, 2)).toEqual([0, 1]);
    expect(range(0, 3)).toEqual([0, 1, 2]);

    expect(range(1, 1)).toEqual([]);
    expect(range(1, 2)).toEqual([1]);
    expect(range(1, 3)).toEqual([1, 2]);
  });
});
