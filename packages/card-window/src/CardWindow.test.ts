import { functions } from './CardWindow';

import { Spacing } from '.';

const {
  getColumns,
  getRenderFirstRow,
  getRenderRows,
  getLastRow,
  getRenderLastRow,
  // getRenderRowRange,
  getRenderContainerStyle,
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

describe('getRenderContainerStyle', () => {
  const width = 0;
  const x = 0;
  const justifyContent = 'space-evenly';
  test('row === 0, card.height: 100, spacing.y: 0', () => {
    const style = getRenderContainerStyle(0, { width, height: 100 }, { x, y: 0, top: 10, bottom: 0 }, justifyContent);
    expect(style.transform).toBe('translate(0, 10px)');
  });
  test('row === 0, card.height: 100, spacing.y: 10', () => {
    const style = getRenderContainerStyle(0, { width, height: 100 }, { x, y: 10, top: 10, bottom: 0 }, justifyContent);
    expect(style.transform).toBe('translate(0, 10px)');
  });
  test('row === 1, card.height: 100, spacing.y: 0', () => {
    const style = getRenderContainerStyle(1, { width, height: 100 }, { x, y: 0, top: 10, bottom: 0 }, justifyContent);
    expect(style.transform).toBe('translate(0, 110px)');
  });
  test('row === 1, card.height: 100, spacing.y: 10', () => {
    const style = getRenderContainerStyle(1, { width, height: 100 }, { x, y: 10, top: 10, bottom: 0 }, justifyContent);
    expect(style.transform).toBe('translate(0, 120px)');
  });
});

describe('getRenderFirstRow', () => {
  const width = 0;
  const spacing: Spacing = { x: 0, y: 0, top: 0, bottom: 0 };
  test('overScanPx: 0', () => {
    expect(getRenderFirstRow(0, 0, { width, height: 100 }, { ...spacing, y: 0 })).toEqual(0);
  });
});

describe('getRenderRows', () => {
  const width = 0;
  const spacing: Spacing = { x: 0, y: 0, top: 0, bottom: 0 };
  test('overScanPx: 0', () => {
    expect(getRenderRows(0, { width, height: 100 }, { width, height: 100 }, { ...spacing, y: 0 })).toEqual(0);
  });
});

describe('getLastRow', () => {
  test('loadingCard: false', () => {
    const loadingCard = false;
    expect(getLastRow(0, loadingCard, 3)).toEqual(0);
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
