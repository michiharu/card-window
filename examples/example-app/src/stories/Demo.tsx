import * as React from 'react';

import { CardWindow, CardWindowProps } from 'card-window';

type Props = Omit<CardWindowProps, 'data' | 'card'>;

const CardWindowDemo: React.FC<Props> = ({ justifyContent }) => {
  const data = [...Array(10000)].map((_, i) => i);
  return (
    <div style={{ width: '100vw', maxWidth: 1000, height: '40vh' }}>
      <CardWindow data={data} card={{ width: 180, height: 100 }} justifyContent={justifyContent}>
        {({ index, style }) => (
          <div style={{ ...style, height: 84, backgroundColor: '#0001' }}>
            <div style={{ padding: 16 }}>
              <h2>{index}</h2>
            </div>
          </div>
        )}
      </CardWindow>
    </div>
  );
};

export default CardWindowDemo;