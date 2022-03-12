import * as React from 'react';
import { CSSProperties, Fragment, RefObject, UIEventHandler, useEffect, useRef, useState } from 'react';

/** CardWindow provides the `CardWindow.children` component with this props. */
export type CardProps<T extends any[] = any[]> = {
  /** `data` is an array. CardWindow passes data to the `CardWindow.children` component. */
  data: T;
  /** `index` is the index of the data allocated to the `CardWindow.children` component. */
  index: number;
  /** `style` should be passed to the root of the `CardWindow.children` component. */
  style: CSSProperties;
  /** `row` is the rendered row. */
  row: number;
  /** `col` is the rendered column. */
  col: number;
};

/** These values are `px`. */
export type Rect = { width: number; height: number };

/** These values are `px`. The defaults are 8px. */
export type Spacing = { x: number; y: number; top: number; bottom: number; left: number; right: number };

/**
 * JustifyContent only supports 7 values.
 * If the value is `stretch`, the `CardProps.style` has `{ flexBasis: 'auto' }`.
 */
export type JustifyContent =
  | 'left'
  | 'right'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

/**
 * `LastRowAlign` that defines how to align
 * when the number of cards in the last row is less than the number of columns.
 */
export type LastRowAlign = 'left' | 'right' | 'inherit';

/** There are two rendering types for the infinite loading feature. */
export type Loading = LoadingCard | LoadingRow;

/** CardWindow provides `LoadingCard.Component` with this props. */
export type LoadingCardComponentProps = {
  /** `style` should be passed to the root of `LoadingCard.Component`. */
  style: CSSProperties;
  /** `row` is the rendered row. */
  row: number;
  /** `col` is the rendered column. */
  col: number;
};

/**
 * LoadingCard(`type: 'card'`) displays the loading component after the last card.
 * Missing description of function-type is [bug](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/281).
 *
 * #### Description of `loadMore`
 *
 * `loadMore` is called when `LoadingCard.Component` is rendered.
 */
export type LoadingCard = {
  type: 'card';
  /** `LoadingCard.count` is the number of loading cards to display. */
  count?: number;
  /** `LoadingCard.Component` is rendered after the last card. */
  LoadingComponent: React.ComponentType<LoadingCardComponentProps>;
  /** `loadMore` is called when `LoadingCard.Component` is rendered. */
  loadMore?(): void;
};

/** CardWindow provides `LoadingRow.Component` with this props. */
export type LoadingRowComponentProps = {
  /** `style` should be passed to the root of `LoadingRow.Component`. */
  style: CSSProperties;
};

/**
 * LoadingRow(`type: 'row'`) displays the loading component in the center next to the last row.
 * Missing description of function-type is [bug](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/281).
 *
 * #### Description of `loadMore`
 *
 * `loadMore` is called when `LoadingRow.Component` is rendered.
 */
export type LoadingRow = {
  type: 'row';
  /** `height` is the height of `LoadingRow.Component`. */
  height: number;
  /** `LoadingRow.Component` is rendered in the center next to the last row. */
  LoadingComponent: React.ComponentType<LoadingRowComponentProps>;
  /** `loadMore` is called when `LoadingRow.Component` is rendered. */
  loadMore?(): void;
};

/**
 * This props is for CardWindow.
 * Missing description of function-type is [bug](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/281).
 *
 * #### Description of `getKey`
 *
 * If you can use an id instead of array index for [key](https://reactjs.org/docs/lists-and-keys.html#keys),
 * define a `getKey` function.
 */
export type CardWindowProps<T extends any[] = any[]> = {
  /** `data` is an array. CardWindow passes data to `CardWindow.children` component. */
  data: T;

  /** `cardRect` is used to calculate the rendering of `CardWindow.children` component. */
  cardRect: Rect;

  /** `children` is a component that receives `CardProps<T>`. */
  children: React.ComponentType<CardProps<T>>;

  /**
   * If you can use an id instead of array index for [key](https://reactjs.org/docs/lists-and-keys.html#keys),
   * define a `getKey` function.
   */
  getKey?(index: number, data: T): string;

  /** The number of px to render outside of the visible area. By default, `CardWindow` overscans 200px. */
  overScanPx?: number;

  /** These values are `px`. The defaults are 8px. */
  spacing?: Partial<Spacing>;

  /** Maximum number of columns can be set. */
  maxCols?: number;

  root?: {
    /** `root.className` are passed to the root element of `CardWindow`. */
    className?: string;
    /** `root.style` are passed to the root element of `CardWindow`. */
    style?: Omit<CSSProperties, 'overflow'>;
  };

  container?: {
    /** `container.className` are passed to the scrollable large container element. */
    className?: string;
    /** `container.style` are passed to the scrollable large container element. */
    style?: Omit<CSSProperties, 'width' | 'height'>;
  };

  /**
   * JustifyContent only supports 7 values.
   * If the value is `stretch`, the `CardProps.style` has `{ flexBasis: 'auto' }`.
   */
  justifyContent?: JustifyContent;

  /**
   * `LastRowAlign` that defines how to align
   * when the number of cards in the last row is less than the number of columns.
   */
  lastRowAlign?: LastRowAlign;

  /** `loading?` is a property for the infinite loading feature. */
  loading?: Loading;
};

export const range = (_start: number, _end?: number): number[] => {
  const start = _end === undefined ? 0 : _start;
  const end = _end ?? _start;
  const list: number[] = [];
  for (let i = start; i < end; i += 1) list.push(i);
  return list;
};

const getColumns = (
  containerWidth: number,
  cardWidth: number,
  spacing: Spacing,
  justifyContent: JustifyContent,
  maxCols: number | undefined
): number => {
  const { x, left, right } = spacing;
  const baseWidth = containerWidth - left - right;
  if (baseWidth < cardWidth) return 0;
  if (justifyContent === 'space-evenly') {
    const cols = Math.max(1, Math.floor((baseWidth - x) / (cardWidth + x)));
    return maxCols !== undefined ? Math.min(maxCols, cols) : cols;
  }
  const cols = Math.floor((baseWidth + x) / (cardWidth + x));
  return maxCols !== undefined ? Math.min(maxCols, cols) : cols;
};

const defaultLoadingCardCount = 10;

const getLoadingCardCount = (loading: Loading | undefined) =>
  loading?.type === 'card' ? loading.count ?? defaultLoadingCardCount : 0;

const getScrollContainerHeight = (
  cols: number,
  cardCount: number,
  card: Rect,
  spacing: Spacing,
  loading: Loading | undefined
): number => {
  if (cols === 0) return 0;
  const { y, top, bottom } = spacing;
  if (loading?.type !== 'row') {
    if (cardCount === 0) return top + bottom;
    const rows = Math.ceil(cardCount / cols);
    return top + rows * (card.height + y) - y + bottom;
  }
  // loading: row
  const rows = Math.ceil(cardCount / cols);
  return top + rows * (card.height + y) + loading.height + bottom;
};

const getRenderFirstRow = (offset: number, overScanPx: number, card: Rect, spacing: Spacing): number =>
  Math.max(0, Math.floor((offset - overScanPx) / (card.height + spacing.y)));

const getRenderRows = (overScanPx: number, container: Rect, card: Rect, { y }: Spacing): number => {
  const height = card.height + y;
  return Math.ceil((container.height + overScanPx * 2 + y) / height);
};

const getLastRow = (length: number, loadingCards: number, cols: number): number => {
  if (length === 0) return 0;
  return Math.ceil((length + loadingCards) / cols) - 1;
};

const getRenderLastRow = (renderFirst: number, rows: number, last: number): number =>
  Math.min(renderFirst + rows, last);

const getRenderRowRange = (
  length: number,
  loadingCards: number,
  cols: number,
  offset: number,
  overScanPx: number,
  container: Rect,
  card: Rect,
  spacing: Spacing
): [number, number] => {
  const renderFirst = getRenderFirstRow(offset, overScanPx, card, spacing);
  const rows = getRenderRows(overScanPx, container, card, spacing);
  const last = getLastRow(length, loadingCards, cols);
  const renderLast = getRenderLastRow(renderFirst, rows, last);
  return [renderFirst, renderLast];
};

const getRenderContainerStyle = (
  row: number,
  card: Rect,
  spacing: Spacing,
  justifyContent: JustifyContent
): CSSProperties => {
  const top = row * (card.height + spacing.y) + spacing.top;
  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent,
    transform: `translate(0, ${top}px)`,
  };
};

const getBaseItemProps = (
  index: number,
  cols: number,
  justifyContent: JustifyContent,
  { width, height }: Rect,
  { x }: Spacing
): Omit<CardProps, 'data' | 'index'> => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  const marginLeft = col !== 0 && ['center', 'left', 'right', 'stretch'].includes(justifyContent) ? x : undefined;
  const flexGrow = justifyContent === 'stretch' ? 1 : undefined;
  const style = { width, flexGrow, height, marginLeft };
  return { row, col, style };
};

type CardTypeProps = { type: 'card' } & Omit<CardProps, 'data'>;
type PlaceholderTypeProps = { type: 'placeholder' } & Omit<CardProps, 'data' | 'index'>;
type LoadingTypeProps = { type: 'loading' } & Omit<CardProps, 'data' | 'index'>;
type ItemProps = CardTypeProps | PlaceholderTypeProps | LoadingTypeProps;
export type ItemType = ItemProps['type'];

const getStop = (
  rows: [number, number],
  cols: number,
  lastRowAlign: LastRowAlign,
  length: number,
  loadingCards: number
): number => {
  if (lastRowAlign !== 'inherit') return (rows[1] + 1) * cols;
  return Math.min(length + loadingCards, (rows[1] + 1) * cols);
};

const getItemTypeAndIndex = (
  index: number,
  col: number,
  length: number,
  loadingCards: number,
  lastRowAlign: LastRowAlign,
  isLastRow: boolean,
  stop: number
): { type: ItemType; index?: number } => {
  if (lastRowAlign !== 'right') {
    if (index < length) return { type: 'card', index };
    if (index < length + loadingCards) return { type: 'loading' };
    return { type: 'placeholder' };
  }
  // lastRowAlign === 'right'
  if (!isLastRow) return index < length ? { type: 'card', index } : { type: 'loading' };

  const placeholderCount = stop - length - loadingCards;
  if (col < placeholderCount) return { type: 'placeholder' };
  return index - placeholderCount < length ? { type: 'card', index: index - placeholderCount } : { type: 'loading' };
};

const getItemProps = (
  length: number,
  loadingCards: number,
  cols: number,
  rows: [number, number],
  card: Rect,
  spacing: Spacing,
  justifyContent: JustifyContent,
  lastRowAlign: LastRowAlign
): ItemProps[] => {
  if (cols === 0) return [];
  if (length + loadingCards === 0) return [];
  const start = rows[0] * cols;
  const stop = getStop(rows, cols, lastRowAlign, length, loadingCards);
  return range(start, stop).map((i) => {
    const base = getBaseItemProps(i, cols, justifyContent, card, spacing);
    const isLastRow = getLastRow(length, loadingCards, cols) === base.row;
    const { type, index } = getItemTypeAndIndex(i, base.col, length, loadingCards, lastRowAlign, isLastRow, stop);
    return { type, index, ...base };
  });
};

const getNextOffset = (offset: number, before: number, after: number, card: Rect, spacing: Spacing): number => {
  const height = card.height + spacing.y;
  const items = before * (Math.floor(offset / height) + (before < after ? 1 : 0));
  const rows = Math.floor(items / after);
  return Math.max(0, height * rows + (offset % height));
};

export const functions = {
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
  getNextOffset,
};

/**
 * `useResizeObserver` is a custom Hook for monitoring the size of the element.
 *
 * If you give the hook an initial value for the element size, the hook will return that element size if ref is null.
 *
 * ```tsx
 * const initialSize = { width: 200, height: 100 };
 *
 * export const Example: React.FC = () => {
 *     const [{ width, height }, ref] = useResizeObserver<HTMLDivElement>();
 *
 *     if (ref.current === null) {
 *         console.log(`width: ${width}`); // 200 from initialSize
 *         console.log(`height: ${height}`); // 100 from initialSize
 *     } else {
 *         console.log(`width: ${width}`); // actual element width
 *         console.log(`height: ${height}`); // actual element height
 *     }
 *
 *     return (
 *         <div ref={ref}>
 *             ...
 *         </div>
 *     )
 * }
 * ```
 */
export const useResizeObserver = <T extends Element>(): Partial<Rect> & { ref: RefObject<T> } => {
  const [rect, set] = useState<Partial<Rect>>({ width: undefined, height: undefined });
  const ref = useRef<T>(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      set({ width, height });
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
      const { width, height } = ref.current.getBoundingClientRect();
      set({ width, height });
    }
    return () => resizeObserver.disconnect();
  }, []);
  return { ref, ...rect };
};

const defaultSpacing: Spacing = { x: 8, y: 8, top: 8, bottom: 8, left: 8, right: 8 };

const CardWindow: React.FC<CardWindowProps> = (props) => {
  const {
    data,
    cardRect: card,
    children: Children,
    getKey = (index) => index,
    overScanPx = 200,
    spacing: spacingProp,
    maxCols = undefined,
    root = {},
    container = {},
    justifyContent = 'space-evenly',
    lastRowAlign = 'left',
    loading,
  } = props;

  const spacing: Spacing = { ...defaultSpacing, ...spacingProp };
  const [offset, setOffset] = useState(0);
  const { ref, width = 0, height = 0 } = useResizeObserver<HTMLDivElement>();
  const rootRect = { width, height };
  const colsRef = useRef(0);
  const cols = getColumns(rootRect.width, card.width, spacing, justifyContent, maxCols);
  const loadingCardCount = getLoadingCardCount(loading);
  const scrollContainerHeight = getScrollContainerHeight(cols, data.length + loadingCardCount, card, spacing, loading);
  const rootStyle = { width: '100%', minWidth: card.width, height: '100%', ...root.style, overflow: 'auto' };
  const scrollContainerStyle: CSSProperties = {
    ...container.style,
    width: '100%',
    paddingLeft: spacing.left,
    paddingRight: spacing.right,
    height: scrollContainerHeight,
  };
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const next = e.currentTarget.scrollTop;
    if (Math.abs(offset - next) > card.height + spacing.y) setOffset(next);
  }
  const renderRows = getRenderRowRange(
    data.length,
    loadingCardCount,
    cols,
    offset,
    overScanPx,
    rootRect,
    card,
    spacing
  );
  const renderContainerStyle = getRenderContainerStyle(renderRows[0], card, spacing, justifyContent);
  const items = getItemProps(
    data.length,
    loadingCardCount,
    cols,
    renderRows,
    card,
    spacing,
    justifyContent,
    lastRowAlign
  );

  useEffect(() => {
    if (colsRef.current !== cols && colsRef.current !== 0 && cols !== 0 && ref.current) {
      ref.current.scrollTop = getNextOffset(offset, colsRef.current, cols, card, spacing);
    }
    colsRef.current = cols;
  }, [cols]);

  useEffect(() => {
    if (scrollContainerHeight !== 0 && loading?.loadMore) {
      const lastItem = items.find((item) => item.type === 'card' && item.index === data.length - 1);
      if (lastItem) loading.loadMore();
    }
  }, [scrollContainerHeight, loading?.loadMore, items]);

  return (
    <div ref={ref} className={root.className} style={rootStyle} onScroll={handleScroll}>
      <div className={container.className} style={scrollContainerStyle}>
        <div style={renderContainerStyle}>
          {items.map((item, i) => {
            const key = item.type === 'card' ? getKey(item.index, data) : `row:${item.row},col:${item.col}`;
            return (
              <Fragment key={key}>
                {i !== 0 && item.col === 0 && <div style={{ width: '100%', height: spacing.y }} />}
                {item.type === 'card' && <Children data={data} {...item} />}
                {item.type === 'placeholder' && <div style={item.style} />}
                {item.type === 'loading' && loading?.type === 'card' && <loading.LoadingComponent {...item} />}
              </Fragment>
            );
          })}
          {loading?.type === 'row' && (
            <div style={{ width: '100%', paddingTop: spacing.y, display: 'flex', justifyContent: 'center' }}>
              <loading.LoadingComponent style={{ height: loading.height }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWindow;
