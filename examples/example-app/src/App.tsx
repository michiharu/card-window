import * as React from 'react';

import { CardWindow } from 'card-window';

const App: React.FC = () => {
  const data = [...Array(10000)].map((_, i) => i);
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <CardWindow data={data} card={{ width: 200, height: 300 }}>
        {({ index, style }) => (
          <div style={{ ...style, height: 284, backgroundColor: '#0001' }}>
            <div style={{ padding: 16 }}>
              <h2>{index}</h2>
            </div>
          </div>
        )}
      </CardWindow>
    </div>
  );
};

export default App;
