import * as React from 'react';

type CardProps<T extends Array<any>> = { data: T; index: number; style: React.CSSProperties };
type Card<T extends Array<any>> = React.ComponentType<CardProps<T>>;
type Rect = { width: number; height: number };
type JustifyContent = 'start' | 'center' | 'space-evenly' | 'space-around';
type Loading = {
  type: 'card' | 'row';
  loadingRect: Rect;
  LoadingComponent: React.ReactNode;
  loadMoreItems: () => void;
};

const useResizeObserver = (initial: Rect = { width: 0, height: 0 }): [Rect, React.MutableRefObject<HTMLDivElement>] => {
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

export const getScrollDivHeight = (cols: number, itemSize: number, card: Rect, loading?: Loading): number => {
  if (cols === 0) return 0;
  const rows = Math.ceil(itemSize / cols);
  return rows * card.height;
};

export const getCardStyle = (
  index: number,
  cols: number,
  justifyContent: JustifyContent,
  card: Rect,
  containerWidth: number
): React.CSSProperties => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  const common: React.CSSProperties = { position: 'absolute', top: card.height * row, ...card };
  switch (justifyContent) {
    case 'start': {
      const left = card.width * col;
      return { ...common, left };
    }
    case 'center': {
      const remain = containerWidth - card.width * cols;
      const left = card.width * col + remain / 2;
      return { ...common, left };
    }
    case 'space-evenly': {
      const space = (containerWidth - card.width * cols) / (cols + 1);
      const left = space + (card.width + space) * col;
      return { ...common, left };
    }
    case 'space-around': {
      const colWidth = containerWidth / cols;
      const left = (colWidth - card.width) / 2 + colWidth * col;
      return { ...common, left };
    }
  }
};

export const getRenderItemProps = (
  cols: number,
  container: Rect,
  card: Rect,
  itemSize: number,
  offset: number,
  overScanPx: number,
  justifyContent: JustifyContent
): { index: number; style: React.CSSProperties }[] => {
  if (cols === 0) return [];
  const startIndex = Math.max(0, Math.floor((offset - overScanPx) / card.height) * cols);
  const stopIndex = Math.min(itemSize - 1, Math.ceil((offset + container.height + overScanPx) / card.height) * cols);
  const items: { index: number; style: React.CSSProperties }[] = [];
  for (let index = startIndex; index <= stopIndex; index++) {
    items.push({
      index,
      style: getCardStyle(index, cols, justifyContent, card, container.width),
    });
  }

  return items;
};

export const getNextOffset = (offset: number, beforeCols: number, afterCols: number, cardHeight: number): number => {
  const remainingOffset = cardHeight - (offset % cardHeight);
  const beforeRow = Math.ceil(offset / cardHeight);
  const afterRow = Math.round((beforeRow * beforeCols) / afterCols);
  return afterRow * cardHeight - remainingOffset;
};

export type CardWindowProps<T extends Array<any> = any[]> = {
  card: Rect;
  data: T;
  children: Card<T>;
  overScanPx?: number;
  justifyContent?: JustifyContent;
  loading?: Loading;
};

const CardWindow: React.FC<CardWindowProps> = (props) => {
  const { card, data, overScanPx = 100, justifyContent = 'space-evenly', children: Children } = props;
  const [offset, setOffset] = React.useState(0);
  const [container, ref] = useResizeObserver();

  const handleScroll: React.UIEventHandler<HTMLDivElement> = React.useCallback(
    (e) => setOffset(e.currentTarget.scrollTop),
    []
  );

  const colsRef = React.useRef(0);
  const cols = Math.floor(container.width / card.width);

  React.useEffect(() => {
    if (colsRef.current === 0 && cols !== 0) {
      colsRef.current = cols;
    } else {
      if (colsRef.current !== cols && ref.current) {
        ref.current.scrollTop = getNextOffset(offset, colsRef.current, cols, card.height);
        colsRef.current = cols;
      }
    }
  }, [cols]);

  const containerStyle: React.CSSProperties = { width: '100%', minWidth: card.width, height: '100%', overflow: 'auto' };
  const scrollDivHeight = getScrollDivHeight(cols, data.length, card);
  const items = getRenderItemProps(cols, container, card, data.length, offset, overScanPx, justifyContent);

  return (
    <div ref={ref} style={containerStyle} onScroll={handleScroll}>
      <div style={{ width: '100%', height: scrollDivHeight, position: 'relative' }}>
        {items.map((item) => (
          <Children key={item.index} data={data} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardWindow;
