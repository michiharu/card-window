import * as React from 'react';

/** CardWindow provides `children` component with this props. */
export type CardProps<T extends Array<any>> = { data: T; index: number; style: React.CSSProperties };
/** These values are `px`. */
export type Rect = { width: number; height: number };
/** These values are `px`. */
export type Spacing = { x: number; y: number };
/** JustifyContent only supports 6 values. */
export type JustifyContent = 'left' | 'right' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
export type LastRowAlign = 'inherit' | 'left' | 'right';
export type Loading = {
  type: 'card' | 'row';
  loadingRect: Rect;
  LoadingComponent: React.ReactNode;
  loadMoreItems: () => void;
};

export type CardWindowProps<T extends Array<any> = any[]> = {
  /** `data` is an array. CardWindow passes data to `children` component. */
  data: T;
  cardRect: Rect;
  children: React.ComponentType<CardProps<T>>;
  getKey?: (index: number, data: T) => string;
  overScanPx?: number;
  spacing?: Partial<Spacing>;
  className?: string;
  style?: Omit<React.CSSProperties, 'overflow'>;
  innerStyle?: Omit<React.CSSProperties, 'position' | 'width' | 'height'>;
  justifyContent?: JustifyContent;
  lastRowAlign?: LastRowAlign;
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

const getColumns = (container: Rect, card: Rect, spacing: Spacing): number => {
  if (container.width < card.width) return 0;
  return Math.floor((container.width + spacing.x) / (card.width + spacing.x));
};

const getScrollContainerStyle = (
  cols: number,
  itemSize: number,
  card: Rect,
  spacing: Spacing,
  innerStyle: React.CSSProperties
): React.CSSProperties => {
  const rows = cols !== 0 ? Math.ceil(itemSize / cols) : 0;
  const height = rows * card.height + (rows - 1) * spacing.y;
  return { ...innerStyle, width: '100%', height };
};

const getRenderRowRange = (
  offset: number,
  overScanPx: number,
  container: Rect,
  card: Rect,
  spacing: Spacing
): [number, number] => {
  const height = card.height + spacing.y;
  const first = Math.max(0, Math.floor((offset - overScanPx) / height));
  const rows = Math.ceil((container.height + overScanPx * 2 + spacing.y) / height);
  return [first, first + rows];
};

const getRenderContainerStyle = (
  row: number,
  card: Rect,
  spacing: Spacing,
  justifyContent: JustifyContent
): React.CSSProperties => {
  const top = row * (card.height + spacing.y);
  return { display: 'flex', flexWrap: 'wrap', justifyContent, transform: `translate(0, ${top}px)` };
};

const getPlaceholderCount = (align: LastRowAlign, index: number, cols: number, length: number): number | undefined => {
  if (align === 'right' && index === length - (length % cols)) return cols - (length % cols);
  if (align === 'left' && length % cols !== 0 && index === length - 1) return cols - (length % cols);
  return undefined;
};

const range = (_start: number, _end?: number): number[] => {
  const start = _end === undefined ? 0 : _start;
  const end = _end ?? _start;
  const list: number[] = [];
  for (let i = start; i < end; i += 1) list.push(i);
  return list;
};

const getMarginLeft = (
  lastRowAlign: LastRowAlign,
  justifyContent: JustifyContent,
  { x }: Spacing,
  index: number
): number | undefined => {
  if (lastRowAlign === 'inherit') throw new Error();
  if (!['center', 'left', 'right'].includes(justifyContent)) return undefined;
  if (lastRowAlign === 'left') return x;
  // Margin left is not required for `align: right` and `index: 0` cases.
  return index !== 0 ? x : undefined;
};

type PlaceholderRendererProps = {
  count: number | undefined;
  lastRowAlign: LastRowAlign;
  justifyContent: JustifyContent;
  card: Rect;
  spacing: Spacing;
};

const PlaceholderRenderer: React.FC<PlaceholderRendererProps> = (props) => {
  const { count = 0, lastRowAlign, justifyContent, card, spacing } = props;
  if (count === 0) return null;
  return (
    <>
      {range(count).map((i) => {
        const marginLeft = getMarginLeft(lastRowAlign, justifyContent, spacing, i);
        const style: React.CSSProperties = { ...card, marginLeft };
        return <div key={i} style={style} />;
      })}
    </>
  );
};

const getRenderItemProps = (
  rows: [number, number],
  cols: number,
  length: number,
  card: Rect,
  { x }: Spacing,
  justifyContent: JustifyContent,
  lastRowAlign: LastRowAlign
): { index: number; style: React.CSSProperties; placeholderCount?: number }[] => {
  if (cols === 0) return [];
  const start = rows[0] * cols;
  const stop = Math.min(rows[1] * cols, length);
  const items: { index: number; style: React.CSSProperties; placeholderCount?: number }[] = [];
  for (let index = start; index < stop; index += 1) {
    const marginLeft = index % cols !== 0 && ['center', 'left', 'right'].includes(justifyContent) ? x : undefined;
    const placeholderCount = getPlaceholderCount(lastRowAlign, index, cols, length);
    items.push({ index, style: { ...card, marginLeft }, placeholderCount });
  }
  return items;
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
  getScrollContainerStyle,
  getRenderRowRange,
  getRenderContainerStyle,
  getPlaceholderCount,
  range,
  getRenderItemProps,
  getNextOffset,
};

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
    lastRowAlign = 'inherit',
  } = props;
  const spacing: Spacing = { x: 8, y: 8, ...spacingProp };
  const [offset, setOffset] = React.useState(0);
  const [container, ref] = useResizeObserver();

  const handleScroll: React.UIEventHandler<HTMLDivElement> = React.useCallback(
    (e) => setOffset(e.currentTarget.scrollTop),
    []
  );

  const colsRef = React.useRef(0);
  const cols = getColumns(container, card, spacing);

  React.useEffect(() => {
    if (colsRef.current !== cols && colsRef.current !== 0 && cols !== 0 && ref.current) {
      ref.current.scrollTop = getNextOffset(offset, colsRef.current, cols, card, spacing);
    }
    colsRef.current = cols;
  }, [cols]);

  const rootStyle = { width: '100%', minWidth: card.width, height: '100%', ...style, overflow: 'auto' };
  const scrollContainerStyle = getScrollContainerStyle(cols, data.length, card, spacing, innerStyle);
  const renderRows = getRenderRowRange(offset, overScanPx, container, card, spacing);
  const renderContainerStyle = getRenderContainerStyle(renderRows[0], card, spacing, justifyContent);
  const items = getRenderItemProps(renderRows, cols, data.length, card, spacing, justifyContent, lastRowAlign);

  return (
    <div ref={ref} className={className} style={rootStyle} onScroll={handleScroll}>
      <div style={scrollContainerStyle}>
        <div style={renderContainerStyle}>
          {items.map((item) => {
            const count = item.placeholderCount;
            const placeholderProps: PlaceholderRendererProps = { count, lastRowAlign, justifyContent, card, spacing };
            return (
              <React.Fragment key={getKey(item.index, data)}>
                {item.index % cols === 0 && <div style={{ width: '100%', height: item.index !== 0 ? spacing.y : 0 }} />}
                {lastRowAlign === 'right' && <PlaceholderRenderer {...placeholderProps} />}
                <Children data={data} {...item} />
                {lastRowAlign === 'left' && <PlaceholderRenderer {...placeholderProps} />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardWindow;
