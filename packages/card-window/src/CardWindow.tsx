import * as React from 'react';

/** CardWindow provides `children` component with this props. */
export type CardProps<T extends any[] = any[]> = {
  /** `data` is an array. CardWindow passes data to the `children` component. */
  data: T;
  /** `index` is the index of the data allocated to the `children` component. */
  index: number;
  /** `style` should be passed to the root of the `children` component. */
  style: React.CSSProperties;
  /** `row` is the rendered row. */
  row: number;
  /** `col` is the rendered column. */
  col: number;
};

/** These values are `px`. */
export type Rect = { width: number; height: number };

/** These values are `px`. */
export type Spacing = { x: number; y: number; top: number; bottom: number };

/**
 * JustifyContent only supports 7 values.
 * If the value is `stretch`, the style of `children` component has `{ flexBasis: 'auto' }`.
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
  style: React.CSSProperties;
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
 * `loadMore` is called when `Component` is rendered.
 */
export type LoadingCard = {
  type: 'card';
  /** `Component` is rendered after the last card. */
  Component: React.ComponentType<LoadingCardComponentProps>;
  /** `loadMore` is called when `Component` is rendered. */
  loadMore?(): void;
};

/** CardWindow provides `LoadingRow.Component` with this props. */
export type LoadingRowComponentProps = {
  /** `style` should be passed to the root of `LoadingRow.Component`. */
  style: React.CSSProperties;
};

/**
 * LoadingRow(`type: 'row'`) displays the loading component in the center next to the last row.
 * Missing description of function-type is [bug](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/281).
 *
 * #### Description of `loadMore`
 * 
 * `loadMore` is called when `Component` is rendered.
 */
export type LoadingRow = {
  type: 'row';
  /** `height` is the height of `LoadingRow.Component`. */
  height: number;
  /** `Component` is rendered in the center next to the last row. */
  Component: React.ComponentType<LoadingRowComponentProps>;
  /** `loadMore` is called when `Component` is rendered. */
  loadMore?(): void;
};

/**
 * This props is for `CardWindow`.
 * Missing description of function-type is [bug](https://github.com/tgreyuk/typedoc-plugin-markdown/issues/281).
 *
 * #### Description of `getKey`
 * 
 * If you can use an id instead of array index for [key](https://reactjs.org/docs/lists-and-keys.html#keys),
 * define a `getKey` function.
 */
export type CardWindowProps<T extends any[] = any[]> = {
  /** `data` is an array. CardWindow passes data to `children` component. */
  data: T;

  /** `cardRect` is used to calculate the rendering of `children` component. */
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

  /** These values are `px`. */
  spacing?: Partial<Spacing>;

  /** `className` is passed to the root element of `CardWindow` */
  className?: string;

  /** `style` is passed to the root element of `CardWindow`.  */
  style?: Omit<React.CSSProperties, 'overflow'>;

  /** `innerStyle` is passed to the scrollable large container element of `CardWindow`.  */
  innerStyle?: Omit<React.CSSProperties, 'position' | 'width' | 'height'>;

  /**
   * JustifyContent only supports 7 values.
   * If the value is `stretch`, the style of `children` component has `{ flexBasis: 'auto' }`.
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

export const useResizeObserver = (
  initial: Rect = { width: 0, height: 0 }
): [Rect, React.MutableRefObject<HTMLDivElement>] => {
  const [rect, set] = React.useState<Rect>(initial);
  const ref = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
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
  return [rect, ref];
};

const getColumns = (container: Rect, { width }: Rect, { x }: Spacing, justifyContent: JustifyContent): number => {
  if (container.width < width) return 0;
  if (justifyContent === 'space-evenly') return Math.max(1, Math.floor((container.width - x) / (width + x)));
  return Math.floor((container.width + x) / (width + x));
};

const getScrollContainerHeight = (
  cols: number,
  length: number,
  card: Rect,
  spacing: Spacing,
  loading: Loading | undefined
): number => {
  if (cols === 0) return 0;
  const { y, top, bottom } = spacing;
  if (!loading) {
    const rows = Math.ceil(length / cols);
    return rows * (card.height + y) - y + top + bottom;
  }
  // loading: card
  if (loading.type === 'card') {
    const rows = Math.ceil((length + 1) / cols);
    return rows * (card.height + y) - y + top + bottom;
  }
  // loading: row
  const rows = Math.ceil(length / cols);
  return rows * (card.height + y) + top + bottom + loading.height;
};

const getRenderFirstRow = (offset: number, overScanPx: number, card: Rect, spacing: Spacing): number =>
  Math.max(0, Math.floor((offset - overScanPx) / (card.height + spacing.y)));

const getRenderRows = (overScanPx: number, container: Rect, card: Rect, { y }: Spacing): number => {
  const height = card.height + y;
  return Math.ceil((container.height + overScanPx * 2 + y) / height);
};

const getLastRow = (length: number, loadingCard: boolean, cols: number): number =>
  Math.floor((length + (loadingCard ? 1 : 0)) / cols);

const getRenderLastRow = (renderFirst: number, rows: number, last: number): number =>
  Math.min(renderFirst + rows, last);

const getRenderRowRange = (
  offset: number,
  overScanPx: number,
  container: Rect,
  card: Rect,
  spacing: Spacing,
  length: number,
  loadingCard: boolean,
  cols: number
): [number, number] => {
  const renderFirst = getRenderFirstRow(offset, overScanPx, card, spacing);
  const rows = getRenderRows(overScanPx, container, card, spacing);
  const last = getLastRow(length, loadingCard, cols);
  const renderLast = getRenderLastRow(renderFirst, rows, last);
  return [renderFirst, renderLast];
};

const getRenderContainerStyle = (
  row: number,
  card: Rect,
  spacing: Spacing,
  justifyContent: JustifyContent
): React.CSSProperties => {
  const top = row * (card.height + spacing.y) + spacing.top;
  return { display: 'flex', flexWrap: 'wrap', justifyContent, transform: `translate(0, ${top}px)` };
};

const range = (_start: number, _end?: number): number[] => {
  const start = _end === undefined ? 0 : _start;
  const end = _end ?? _start;
  const list: number[] = [];
  for (let i = start; i < end; i += 1) list.push(i);
  return list;
};
type BaseItemProps = { style: React.CSSProperties; row: number; col: number };
const getBaseItemProps = (
  index: number,
  cols: number,
  justifyContent: JustifyContent,
  { width, height }: Rect,
  { x }: Spacing
): BaseItemProps => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  const marginLeft = col !== 0 && ['center', 'left', 'right', 'stretch'].includes(justifyContent) ? x : undefined;
  const widthObj: React.CSSProperties = justifyContent !== 'stretch' ? { width } : { width, flexBasis: 'auto' };
  const style = { ...widthObj, height, marginLeft };
  return { style, row, col };
};

type PlaceholderTypeProps = { type: 'placeholder' } & BaseItemProps;
type LoadingTypeProps = { type: 'loading' } & BaseItemProps;
type ItemProps = ({ type: 'card' } & Omit<CardProps, 'data'>) | PlaceholderTypeProps | LoadingTypeProps;

const getItemProps = (
  rows: [number, number],
  cols: number,
  length: number,
  card: Rect,
  spacing: Spacing,
  justifyContent: JustifyContent,
  lastRowAlign: LastRowAlign,
  loadingCard: boolean
): ItemProps[] => {
  if (cols === 0) return [];
  if (lastRowAlign === 'left') {
    const start = rows[0] * cols;
    const stop = (rows[1] + 1) * cols;
    const lastRowCardCount = length % cols;
    return range(start, stop).map((index) => {
      const base = getBaseItemProps(index, cols, justifyContent, card, spacing);
      const isLastRow = getLastRow(length, loadingCard, cols) === base.row;
      if (!isLastRow) return { type: 'card', index, ...base };
      if (base.col < lastRowCardCount) return { type: 'card', index, ...base };
      if (loadingCard && base.col === lastRowCardCount) return { type: 'loading', ...base };
      return { type: 'placeholder', ...base };
    });
  }
  if (lastRowAlign === 'right') {
    const start = rows[0] * cols;
    const stop = (rows[1] + 1) * cols;
    const lastRowCardCount = length % cols;
    const placeholderCount = cols - lastRowCardCount - (loadingCard ? 1 : 0);
    return range(start, stop).map((index) => {
      const base = getBaseItemProps(index, cols, justifyContent, card, spacing);
      const isLastRow = getLastRow(length, loadingCard, cols) === base.row;
      if (!isLastRow) return { type: 'card', index, ...base };
      if (base.col < placeholderCount) return { type: 'placeholder', ...base };
      if (base.col < placeholderCount + lastRowCardCount)
        return { type: 'card', index: index - placeholderCount, ...base };
      return { type: 'loading', ...base };
    });
  }
  const start = rows[0] * cols;
  const stop = Math.min(length + (loadingCard ? 1 : 0), (rows[1] + 1) * cols);
  return range(start, stop).map((index) => {
    const base = getBaseItemProps(index, cols, justifyContent, card, spacing);
    if (!loadingCard || index !== stop - 1) return { type: 'card', index, ...base };
    return { type: 'loading', ...base };
  });
};

const getNextOffset = (offset: number, before: number, after: number, card: Rect, spacing: Spacing): number => {
  const height = card.height + spacing.y;
  const remainingOffset = height - (offset % height);
  const beforeRow = Math.ceil(offset / height);
  const afterRow = Math.round((beforeRow * before) / after);
  return afterRow * height - remainingOffset;
};

export const functions = {
  getColumns,
  getRenderFirstRow,
  getRenderRows,
  getLastRow,
  getRenderLastRow,
  getRenderRowRange,
  getRenderContainerStyle,
  range,
  getItemProps,
  getNextOffset,
};

const defaultSpace = 8;

const CardWindow: React.FC<CardWindowProps> = (props) => {
  const {
    data,
    cardRect: card,
    children: Children,
    getKey = (index) => index,
    overScanPx = 200,
    spacing: spacingProp,
    className = undefined,
    style = {},
    innerStyle = {},
    justifyContent = 'space-evenly',
    lastRowAlign = 'left',
    loading,
  } = props;
  const spacing: Spacing = {
    x: defaultSpace,
    y: defaultSpace,
    top: defaultSpace,
    bottom: defaultSpace,
    ...spacingProp,
  };

  const [offset, setOffset] = React.useState(0);
  const [container, ref] = useResizeObserver();
  const colsRef = React.useRef(0);
  const cols = getColumns(container, card, spacing, justifyContent);

  React.useEffect(() => {
    if (colsRef.current !== cols && colsRef.current !== 0 && cols !== 0 && ref.current) {
      ref.current.scrollTop = getNextOffset(offset, colsRef.current, cols, card, spacing);
    }
    colsRef.current = cols;
  }, [cols]);

  const loadingCard: boolean = loading?.type === 'card';
  const rootStyle = { width: '100%', minWidth: card.width, height: '100%', ...style, overflow: 'auto' };
  const scrollContainerHeight = getScrollContainerHeight(cols, data.length, card, spacing, loading);
  const scrollContainerStyle = { ...innerStyle, width: '100%', height: scrollContainerHeight };
  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    if (loading?.loadMore && offset < e.currentTarget.scrollTop) {
      const loadingHeight = loading.type === 'card' ? card.height : loading.height;
      const threshold = scrollContainerHeight - container.height - loadingHeight;
      if (threshold < e.currentTarget.scrollTop) loading.loadMore();
    }
    setOffset(e.currentTarget.scrollTop);
  };
  const renderRows = getRenderRowRange(offset, overScanPx, container, card, spacing, data.length, loadingCard, cols);
  const renderContainerStyle = getRenderContainerStyle(renderRows[0], card, spacing, justifyContent);
  const items = getItemProps(renderRows, cols, data.length, card, spacing, justifyContent, lastRowAlign, loadingCard);
  return (
    <div ref={ref} className={className} style={rootStyle} onScroll={handleScroll}>
      <div style={scrollContainerStyle}>
        <div style={renderContainerStyle}>
          {items.map((item, i) => {
            const key = item.type === 'card' ? getKey(item.index, data) : `col:${item.col}`;
            return (
              <React.Fragment key={key}>
                {i !== 0 && item.col === 0 && <div style={{ width: '100%', height: spacing.y }} />}
                {item.type === 'card' && <Children data={data} {...item} />}
                {item.type === 'placeholder' && <div style={item.style} />}
                {item.type === 'loading' && loading?.type === 'card' && <loading.Component {...item} />}
              </React.Fragment>
            );
          })}
          {loading?.type === 'row' && (
            <div style={{ width: '100%', paddingTop: spacing.y, display: 'flex', justifyContent: 'center' }}>
              <loading.Component style={{ height: loading.height }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWindow;
