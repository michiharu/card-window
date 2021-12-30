import * as React from 'react';

export type CardProps<T extends Array<any>> = { data: T; index: number; style: React.CSSProperties };
export type Rect = { width: number; height: number };
export type Spacing = { x: number; y: number };
export type JustifyContent = 'left' | 'right' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

export type Loading = {
  type: 'card' | 'row';
  loadingRect: Rect;
  LoadingComponent: React.ReactNode;
  loadMoreItems: () => void;
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

const getRenderItemProps = (
  rows: [number, number],
  cols: number,
  length: number,
  card: Rect,
  spacing: Spacing,
  justifyContent: JustifyContent
): { index: number; style: React.CSSProperties }[] => {
  if (cols === 0) return [];
  const start = Math.max(0, rows[0] * cols);
  const stop = Math.min(rows[1] * cols, length);
  const last = length - (length % cols !== 0 ? length % cols : cols);
  const items: { index: number; style: React.CSSProperties }[] = [];
  for (let index = start; index < stop; index += 1) {
    const marginLeft = justifyContent === 'left' ? undefined : justifyContent === 'right' ? spacing.x : spacing.x / 2;
    const marginRight = justifyContent === 'right' ? undefined : justifyContent === 'left' ? spacing.x : spacing.x / 2;
    const marginBottom = index < last ? spacing.y : undefined;
    items.push({ index, style: { ...card, marginLeft, marginRight, marginBottom } });
  }
  return items;
};

const getNextOffset = (offset: number, beforeCols: number, afterCols: number, card: Rect): number => {
  const remainingOffset = card.height - (offset % card.height);
  const beforeRow = Math.ceil(offset / card.height);
  const afterRow = Math.round((beforeRow * beforeCols) / afterCols);
  return afterRow * card.height - remainingOffset;
};

export const __local__ = {
  getColumns,
  getScrollContainerStyle,
  getRenderRowRange,
  getRenderContainerStyle,
  getRenderItemProps,
  getNextOffset,
};

export type CardWindowProps<T extends Array<any> = any[]> = {
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
  loading?: Loading;
};

const CardWindow: React.FC<CardWindowProps> = (props) => {
  const {
    data,
    cardRect: card,
    children: Children,
    getKey = (index) => index,
    overScanPx = 200,
    spacing: _spacing,
    className = undefined,
    style = {},
    innerStyle = {},
    justifyContent = 'space-evenly',
  } = props;
  const spacing: Spacing = { x: 8, y: 8, ..._spacing };
  const [offset, setOffset] = React.useState(0);
  const [container, ref] = useResizeObserver();

  const handleScroll: React.UIEventHandler<HTMLDivElement> = React.useCallback(
    (e) => setOffset(e.currentTarget.scrollTop),
    []
  );

  const colsRef = React.useRef(0);
  const cols = getColumns(container, card, spacing);
  console.log('cols: ', cols);
  console.log('container.width: ', container.width, 'card.width', card.width, 'spacing.x', spacing.x);

  React.useEffect(() => {
    if (colsRef.current !== cols && colsRef.current !== 0 && cols !== 0 && ref.current) {
      ref.current.scrollTop = getNextOffset(offset, colsRef.current, cols, card);
    }
    colsRef.current = cols;
  }, [cols]);

  const rootStyle = { width: '100%', minWidth: card.width, height: '100%', ...style, overflow: 'auto' };
  const scrollContainerStyle = getScrollContainerStyle(cols, data.length, card, spacing, innerStyle);
  const renderRows = getRenderRowRange(offset, overScanPx, container, card, spacing);
  const renderContainerStyle = getRenderContainerStyle(renderRows[0], card, spacing, justifyContent);
  const items = getRenderItemProps(renderRows, cols, data.length, card, spacing, justifyContent);

  return (
    <div ref={ref} className={className} style={rootStyle} onScroll={handleScroll}>
      <div style={scrollContainerStyle}>
        <div style={renderContainerStyle}>
          {items.map((item) => (
            <Children key={getKey(item.index, data)} data={data} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardWindow;
