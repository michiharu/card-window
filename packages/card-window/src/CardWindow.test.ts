import { LastRowAlign, Loading, functions, range } from './CardWindow';

import { JustifyContent, Rect, Spacing } from '.';

const {
  getColumns,
  getScrollContainerHeight,
  getRenderFirstRow,
  getRenderRows,
  getLastRow,
  getRenderLastRow,
  getRenderRowRange,
  getRenderContainerStyle,
  getBaseItemProps,
  getItemProps,
  // getNextOffset,
} = functions;

describe('range', () => {
  describe('range(stop)', () => {
    test.each([
      [0, []],
      [1, [0]],
      [2, [0, 1]],
      [3, [0, 1, 2]],
    ])('range(%p) => %p', (x, expected) => expect(range(x)).toEqual(expected));
  });
  describe('range(start, stop)', () => {
    test.each([
      [5, 5, []],
      [5, 6, [5]],
      [5, 7, [5, 6]],
      [5, 8, [5, 6, 7]],
    ])('range(%p, %p) => %p', (x, y, expected) => expect(range(x, y)).toEqual(expected));
  });
});

describe('getColumns(container, card, spacing, justifyContent, maxCols)', () => {
  test('container.width < card.width => 0', () => {
    const container: Rect = { width: 100, height: 0 };
    const card: Rect = { width: 120, height: 0 };
    const spacing = { x: 0, y: 0, top: 0, bottom: 0 };
    expect(getColumns(container, card, spacing, 'center', undefined)).toBe(0);
  });
  describe('container.width: 200', () => {
    const container: Rect = { width: 200, height: 0 };
    const name = 'card.width: %p, spacing.x: %p => %p';
    const byCase = (justifyContent: JustifyContent, maxCols: number | undefined) => (width, x, expected) => {
      const card: Rect = { width, height: 0 };
      const spacing = { x, y: 0, top: 0, bottom: 0 };
      expect(getColumns(container, card, spacing, justifyContent, maxCols)).toBe(expected);
    };
    describe(`justifyContent: not space-evenly('center')`, () => {
      describe('maxCols: undefined', () =>
        test.each([
          [100, 1, 1],
          [100, 0, 2],
          [80, 41, 1],
          [80, 40, 2],
          [80, 0, 2],
          [60, 81, 1],
          [60, 80, 2],
          [60, 11, 2],
          [60, 10, 3],
          [60, 0, 3],
        ])(name, byCase('center', undefined)));

      describe('maxCols: 2', () =>
        test.each([
          [80, 0, 2],
          [60, 0, 2],
        ])(name, byCase('center', 2)));
    });

    describe(`justifyContent: 'space-evenly'`, () => {
      describe('maxCols: undefined', () =>
        test.each([
          [100, 1, 1],
          [100, 0, 2],
          [80, 14, 1],
          [80, 13, 2],
          [80, 0, 2],
          [60, 27, 1],
          [60, 26, 2],
          [60, 6, 2],
          [60, 5, 3],
          [60, 0, 3],
        ])(name, byCase('space-evenly', undefined)));
    });
    describe('maxCols: 2', () =>
      test.each([
        [80, 0, 2],
        [60, 0, 2],
      ])(name, byCase('space-evenly', 2)));
  });
});

describe('getScrollContainerHeight(cols, length, card, spacing, loading)', () => {
  const name = 'length: %p, card.height: %p, spacing: { x: 0, y: %p, top: %p, bottom: %p } => %p';
  const byCase =
    (cols: number, loading?: Loading) => (length, cardHeight, spacingY, spacingTop, spacingBottom, expected) => {
      const card: Rect = { width: 0, height: cardHeight };
      const spacing: Spacing = { x: 0, y: spacingY, top: spacingTop, bottom: spacingBottom };
      expect(getScrollContainerHeight(cols, length, card, spacing, loading)).toBe(expected);
    };
  describe('cols: 3', () => {
    const cols = 3;
    describe('loading: undefined', () => {
      describe('rows: 0', () =>
        test.each([
          [0, 100, 0, 0, 0, 0],
          [0, 100, 10, 0, 0, 0],
          [0, 100, 0, 10, 0, 10],
          [0, 100, 0, 0, 10, 10],
          [0, 100, 10, 10, 10, 20],
        ])(name, byCase(cols, undefined)));

      describe('rows: 1', () =>
        test.each([
          [1, 100, 0, 0, 0, 100],
          [1, 100, 10, 0, 0, 100],
          [1, 100, 0, 10, 0, 110],
          [1, 100, 0, 0, 10, 110],
          [1, 100, 10, 10, 10, 120],
          [3, 100, 0, 0, 0, 100],
        ])(name, byCase(cols, undefined)));

      describe('rows: 2', () =>
        test.each([
          [4, 100, 0, 0, 0, 200],
          [4, 100, 10, 0, 0, 210],
          [4, 100, 0, 10, 0, 210],
          [4, 100, 0, 0, 10, 210],
          [4, 100, 10, 10, 10, 230],
          [6, 100, 0, 0, 0, 200],
        ])(name, byCase(cols, undefined)));

      describe('rows: 3', () =>
        test.each([
          [7, 100, 0, 0, 0, 300],
          [7, 100, 10, 0, 0, 320],
          [7, 100, 0, 10, 0, 310],
          [7, 100, 0, 0, 10, 310],
          [7, 100, 10, 10, 10, 340],
        ])(name, byCase(cols, undefined)));
    });

    describe(`loading.type: 'card'`, () =>
      test.each([
        [0, 100, 0, 0, 0, 100],
        [2, 100, 0, 0, 0, 100],
        [3, 100, 0, 0, 0, 200],
        [5, 100, 0, 0, 0, 200],
        [6, 100, 0, 0, 0, 300],
      ])(name, byCase(cols, { type: 'card', LoadingComponent: () => null })));

    describe(`loading.type: 'row'`, () =>
      test.each([
        [0, 100, 0, 0, 0, 50],
        [1, 100, 0, 0, 0, 150],
        [3, 100, 0, 0, 0, 150],
        [4, 100, 0, 0, 0, 250],
        [6, 100, 0, 0, 0, 250],
        [7, 100, 0, 0, 0, 350],
      ])(name, byCase(cols, { type: 'row', height: 50, LoadingComponent: () => null })));
  });
  describe('cols: 2, loading: undefined', () =>
    test.each([
      [0, 100, 0, 0, 0, 0],
      [1, 100, 0, 0, 0, 100],
      [2, 100, 0, 0, 0, 100],
      [3, 100, 0, 0, 0, 200],
      [4, 100, 0, 0, 0, 200],
      [5, 100, 0, 0, 0, 300],
    ])(name, byCase(2, undefined)));
});

describe('getRenderFirstRow', () =>
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
  `('offset: $offset, overScanPx: $overScanPx, expected: $expected', ({ offset, overScanPx, expected }) => {
    const card: Rect = { width: 0, height: 100 };
    const spacing: Spacing = { x: 0, y: 10, top: 10, bottom: 10 };
    expect(getRenderFirstRow(offset, overScanPx, card, spacing)).toEqual(expected);
  }));

describe('getRenderRows', () => {
  test.each`
    overScanPx | containerHeight | cardHeight | y     | expected
    ${0}       | ${100}          | ${100}     | ${0}  | ${1}
    ${0}       | ${101}          | ${100}     | ${0}  | ${2}
    ${0}       | ${200}          | ${100}     | ${0}  | ${2}
    ${0}       | ${201}          | ${100}     | ${0}  | ${3}
    ${50}      | ${0}            | ${100}     | ${0}  | ${1}
    ${50}      | ${1}            | ${100}     | ${0}  | ${2}
    ${50}      | ${100}          | ${100}     | ${0}  | ${2}
    ${50}      | ${101}          | ${100}     | ${0}  | ${3}
    ${0}       | ${90}           | ${90}      | ${10} | ${1}
    ${0}       | ${91}           | ${90}      | ${10} | ${2}
    ${0}       | ${190}          | ${90}      | ${10} | ${2}
    ${0}       | ${191}          | ${90}      | ${10} | ${3}
  `(
    'overScanPx: $overScanPx, containerHeight: $containerHeight, cardHeight: $cardHeight, y: $y, expected: $expected',
    ({ overScanPx, containerHeight, cardHeight, y, expected }) => {
      const container: Rect = { width: 0, height: containerHeight };
      const card: Rect = { width: 0, height: cardHeight };
      const spacing: Spacing = { x: 0, y, top: 0, bottom: 0 }; // no spacing
      expect(getRenderRows(overScanPx, container, card, spacing)).toEqual(expected);
    }
  );
});

describe('getLastRow', () => {
  const name = 'length: $length, expected: $expected';
  const byCase =
    (cols: number, loadingCard: boolean) =>
    ({ length, expected }) =>
      expect(getLastRow(length, cols, loadingCard)).toEqual(expected);

  describe('cols: 3, loadingCard: false', () =>
    test.each`
      length | expected
      ${0}   | ${0}
      ${3}   | ${0}
      ${4}   | ${1}
      ${6}   | ${1}
      ${7}   | ${2}
    `(name, byCase(3, false)));

  describe('cols: 3,loadingCard: true', () =>
    test.each`
      length | expected
      ${0}   | ${0}
      ${2}   | ${0}
      ${3}   | ${1}
      ${5}   | ${1}
      ${6}   | ${2}
    `(name, byCase(3, true)));

  describe('cols: 2, loadingCard: false', () =>
    test.each`
      length | expected
      ${0}   | ${0}
      ${2}   | ${0}
      ${3}   | ${1}
      ${4}   | ${1}
      ${5}   | ${2}
    `(name, byCase(2, false)));
});

describe('getRenderLastRow', () =>
  test.each`
    renderFirst | rows | last | expected
    ${0}        | ${0} | ${0} | ${0}
    ${0}        | ${1} | ${0} | ${0}
    ${0}        | ${0} | ${1} | ${0}
    ${1}        | ${1} | ${1} | ${1}
    ${1}        | ${1} | ${3} | ${2}
  `(
    'renderFirst: $renderFirst | rows: $rows | last: $last | expected: $expected',
    ({ renderFirst, rows, last, expected }) => expect(getRenderLastRow(renderFirst, rows, last)).toEqual(expected)
  ));

describe('getRenderRowRange', () => {
  const name = 'offset: %p, length: %p, cols: %p, loadingCard: %p => %p';
  const byCase = (overScanPx: number) => (offset, length, cols, loadingCard, expected) => {
    const container: Rect = { width: 200, height: 200 };
    const card: Rect = { width: 0, height: 100 };
    const spacing: Spacing = { x: 0, y: 0, top: 0, bottom: 0 };
    const result = getRenderRowRange(offset, overScanPx, container, card, spacing, length, cols, loadingCard);
    expect(result).toEqual(expected);
  };

  describe('overScanPx: 0', () =>
    test.each([
      [0, 3, 3, false, [0, 0]],
      [0, 4, 3, false, [0, 1]],
      [99, 100, 3, false, [0, 2]],
      [100, 100, 3, false, [1, 3]],
      [3299, 100, 3, false, [32, 33]],
      [3300, 100, 3, false, [33, 33]],
    ])(name, byCase(0)));

  describe('overScanPx: 200', () =>
    test.each([
      [0, 3, 3, false, [0, 0]],
      [0, 4, 3, false, [0, 1]],
      [299, 100, 3, false, [0, 6]],
      [300, 100, 3, false, [1, 7]],
      [3299, 100, 3, false, [30, 33]],
      [3300, 100, 3, false, [31, 33]],
    ])(name, byCase(200)));
});

describe('getRenderContainerStyle', () => {
  const name = 'row: %p, card.height: %p, spacing: { x: 0, y: %p, top: %p, bottom: 0 } => translate(0, %ppx)';
  const byCase = (row, height, y, top, expected) => {
    const card: Rect = { width: 0, height };
    const spacing: Spacing = { x: 0, y, top, bottom: 0 };
    expect(getRenderContainerStyle(row, card, spacing, 'space-evenly').transform).toBe(`translate(0, ${expected}px)`);
  };
  test.each([
    [0, 100, 0, 0, 0],
    [0, 100, 10, 0, 0],
    [0, 100, 0, 10, 10],
    [1, 100, 0, 0, 100],
    [1, 100, 10, 0, 110],
    [1, 100, 10, 10, 120],
  ])(name, byCase);
});

describe('getBaseItemProps', () => {
  const name = 'index: %p, cols: %p, x: %p => marginLeft: %p, flexGrow: %p, row: %p, col: %p';
  const byCase = (justifyContent: JustifyContent) => (index, cols, x, marginLeft, flexGrow, row, col) => {
    const card: Rect = { width: 0, height: 0 };
    const spacing: Spacing = { x, y: 0, top: 0, bottom: 0 };
    const result = getBaseItemProps(index, cols, justifyContent, card, spacing);
    expect(result.row).toBe(row);
    expect(result.col).toBe(col);
    expect(result.style.marginLeft).toBe(marginLeft);
    expect(result.style.flexGrow).toBe(flexGrow);
  };

  describe('justifyContent: stretch', () =>
    test.each([
      [0, 3, 0, undefined, 1, 0, 0],
      [1, 3, 0, 0, 1, 0, 1],
      [2, 3, 0, 0, 1, 0, 2],
      [3, 3, 0, undefined, 1, 1, 0],
    ])(name, byCase('stretch')));

  describe('justifyContent: center', () =>
    test.each([
      [0, 3, 0, undefined, undefined, 0, 0],
      [1, 3, 0, 0, undefined, 0, 1],
      [2, 3, 0, 0, undefined, 0, 2],
      [3, 3, 0, undefined, undefined, 1, 0],
    ])(name, byCase('center')));

  describe('justifyContent: space-evenly', () =>
    test.each([
      [0, 3, 0, undefined, undefined, 0, 0],
      [1, 3, 0, undefined, undefined, 0, 1],
      [2, 3, 0, undefined, undefined, 0, 2],
      [3, 3, 0, undefined, undefined, 1, 0],
    ])(name, byCase('space-evenly')));
});

describe('getItemProps', () => {
  const name = 'rows: %p, cols: %p, length: %p => %p';
  const byCase = (lastRowAlign: LastRowAlign, loadingCard: boolean) => (rows, cols, length, expected) => {
    const card: Rect = { width: 0, height: 0 };
    const spacing: Spacing = { x: 0, y: 0, top: 0, bottom: 0 };
    const items = getItemProps(rows, cols, length, card, spacing, 'space-evenly', lastRowAlign, loadingCard);
    expect(items.length).toBe(expected.length);
    expect(items.map((item) => item.type)).toEqual(expected);
  };
  describe('lastRowAlign: left', () => {
    describe('loadingCard: false', () =>
      test.each([
        [[0, 1], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[31, 32], 3, 100, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[32, 33], 3, 100, ['card', 'card', 'card', 'card', 'placeholder', 'placeholder']],
        [[32, 33], 3, 101, ['card', 'card', 'card', 'card', 'card', 'placeholder']],
        [[32, 33], 3, 102, ['card', 'card', 'card', 'card', 'card', 'card']],
      ])(name, byCase('left', false)));
    describe('loadingCard: true', () =>
      test.each([
        [[0, 1], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[31, 32], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[32, 33], 3, 99, ['card', 'card', 'card', 'loading', 'placeholder', 'placeholder']],
        [[32, 33], 3, 100, ['card', 'card', 'card', 'card', 'loading', 'placeholder']],
        [[32, 33], 3, 101, ['card', 'card', 'card', 'card', 'card', 'loading']],
      ])(name, byCase('left', true)));
  });
  describe('lastRowAlign: right', () => {
    describe('loadingCard: false', () =>
      test.each([
        [[0, 1], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[31, 32], 3, 100, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[32, 33], 3, 100, ['card', 'card', 'card', 'placeholder', 'placeholder', 'card']],
        [[32, 33], 3, 101, ['card', 'card', 'card', 'placeholder', 'card', 'card']],
        [[32, 33], 3, 102, ['card', 'card', 'card', 'card', 'card', 'card']],
      ])(name, byCase('right', false)));
    describe('loadingCard: true', () =>
      test.each([
        [[0, 1], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[31, 32], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[32, 33], 3, 99, ['card', 'card', 'card', 'placeholder', 'placeholder', 'loading']],
        [[32, 33], 3, 100, ['card', 'card', 'card', 'placeholder', 'card', 'loading']],
        [[32, 33], 3, 101, ['card', 'card', 'card', 'card', 'card', 'loading']],
      ])(name, byCase('right', true)));
  });
  describe('lastRowAlign: inherit', () => {
    describe('loadingCard: false', () =>
      test.each([
        [[0, 1], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[31, 32], 3, 100, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[32, 33], 3, 100, ['card', 'card', 'card', 'card']],
        [[32, 33], 3, 101, ['card', 'card', 'card', 'card', 'card']],
        [[32, 33], 3, 102, ['card', 'card', 'card', 'card', 'card', 'card']],
      ])(name, byCase('inherit', false)));
    describe('loadingCard: true', () =>
      test.each([
        [[0, 1], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[31, 32], 3, 99, ['card', 'card', 'card', 'card', 'card', 'card']],
        [[32, 33], 3, 99, ['card', 'card', 'card', 'loading']],
        [[32, 33], 3, 100, ['card', 'card', 'card', 'card', 'loading']],
        [[32, 33], 3, 101, ['card', 'card', 'card', 'card', 'card', 'loading']],
      ])(name, byCase('inherit', true)));
  });
});
