import * as React from 'react';

export type CardProps<T extends Array<unknown>> = { data: T; index: number; style: React.CSSProperties };
export type Rect = { width: number; height: number };
export type JustifyContent = 'start' | 'center' | 'space-evenly' | 'space-around';
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

const getScrollDivHeight = (cols: number, itemSize: number, card: Rect): number => {
  if (cols === 0) return 0;
  const rows = Math.ceil(itemSize / cols);
  return rows * card.height;
};

const getVisibleDivStyle = (
  offset: number,
  overScanPx: number,
  cols: number,
  card: Rect,
  justifyContent: React.CSSProperties['justifyContent']
): React.CSSProperties => {
  const index = Math.max(0, Math.floor((offset - overScanPx) / card.height) * cols);
  const row = Math.floor(index / cols);
  const top = row * card.height;
  return { display: 'flex', flexWrap: 'wrap', justifyContent, transform: `translate(0, ${top}px)` };
};

const getRenderItemProps = (
  cols: number,
  container: Rect,
  card: Rect,
  itemSize: number,
  offset: number,
  overScanPx: number
): { index: number; style: React.CSSProperties }[] => {
  if (cols === 0) return [];
  const startIndex = Math.max(0, Math.floor((offset - overScanPx) / card.height) * cols);
  const stopIndex = Math.min(itemSize - 1, Math.ceil((offset + container.height + overScanPx) / card.height) * cols);
  const items: { index: number; style: React.CSSProperties }[] = [];
  for (let index = startIndex; index <= stopIndex; index += 1) items.push({ index, style: card });
  return items;
};

const getNextOffset = (offset: number, beforeCols: number, afterCols: number, cardHeight: number): number => {
  const remainingOffset = cardHeight - (offset % cardHeight);
  const beforeRow = Math.ceil(offset / cardHeight);
  const afterRow = Math.round((beforeRow * beforeCols) / afterCols);
  return afterRow * cardHeight - remainingOffset;
};

export type CardWindowProps<T extends Array<any> = any[]> = {
  data: T;
  cardRect: Rect;
  children: React.ComponentType<CardProps<T>>;
  getKey?: (index: number, data: T) => string;
  className?: string;
  style?: Omit<React.CSSProperties, 'overflow'>;
  innerStyle?: Omit<React.CSSProperties, 'position' | 'width' | 'height'>;
  overScanPx?: number;
  justifyContent?: React.CSSProperties['justifyContent'];
  loading?: Loading;
};

const CardWindow: React.FC<CardWindowProps> = (props) => {
  const {
    data,
    cardRect,
    children: Children,
    getKey = (index) => index,
    className = undefined,
    style = {},
    innerStyle = {},
    overScanPx = 1000,
    justifyContent = 'space-evenly',
  } = props;
  const [offset, setOffset] = React.useState(0);
  const [container, ref] = useResizeObserver();

  const handleScroll: React.UIEventHandler<HTMLDivElement> = React.useCallback(
    (e) => setOffset(e.currentTarget.scrollTop),
    []
  );

  const colsRef = React.useRef(0);
  const cols = Math.floor(container.width / cardRect.width);
  const rows = Math.ceil((container.height + overScanPx * 2) / cardRect.height);

  React.useEffect(() => {
    if (colsRef.current !== cols && colsRef.current !== 0 && cols !== 0 && ref.current) {
      ref.current.scrollTop = getNextOffset(offset, colsRef.current, cols, cardRect.height);
    }
    colsRef.current = cols;
  }, [cols]);

  const rootStyle = { width: '100%', minWidth: cardRect.width, height: '100%', ...style, overflow: 'auto' };
  const height = getScrollDivHeight(cols, data.length, cardRect);
  const scrollStyle: React.CSSProperties = { ...innerStyle, width: '100%', height };
  const visibleStyle: React.CSSProperties = getVisibleDivStyle(offset, overScanPx, cols, cardRect, justifyContent);
  const items = getRenderItemProps(cols, container, cardRect, data.length, offset, overScanPx);

  return (
    <div ref={ref} className={className} style={rootStyle} onScroll={handleScroll}>
      <div style={scrollStyle}>
        <div style={visibleStyle}>
          {items.map((item) => (
            <Children key={getKey(item.index, data)} data={data} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardWindow;
