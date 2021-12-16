import * as React from 'react';

import { CardWindow } from 'card-window';

const App: React.FC = () => {
  const cardRect = { width: 200, height: 300 };
  const data = [...Array(1000)].map((_, i) => i);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <CardWindow data={data} card={cardRect} overScanPx={1000}>
        {({ index, style }) => (
          <div style={{ ...style, height: 284, backgroundColor: '#0001'}}>
            <div style={{ padding: 16 }}>
              <h2>{index}</h2>
              <p>left: {Number(style.left).toFixed(2)}</p>
              <p>top : {Number(style.top).toFixed(2)}</p>
            </div>
          </div>
        )}
      </CardWindow>
    </div>
  );
};

export default App;
