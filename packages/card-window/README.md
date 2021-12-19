# card-window

Card window works by only rendering part of a large data set (just enough to fill the viewport).
It is very much inspired by Brian Vaughn's react-window.

## Installation

card-window is available as an npm package.

```bash
// with npm
npm install card-window

// with yarn
yarn add card-window
```

## Usage

```typescript
import * as React from 'react';
import ReactDOM from 'react-dom';

import { CardWindow } from 'card-window';

const App: React.FC = () => {
  const data = [...Array(10000)].map((_, i) => i);
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <CardWindow data={data} card={{ width: 200, height: 300 }}>
        {({ index, style }) => (
          <div style={{ ...style, height: 284, backgroundColor: '#0001'}}>
            <div style={{ padding: 16 }}>
              <h2>{index}</h2>
            </div>
          </div>
        )}
      </CardWindow>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
```

CardWindow Component fits the size of the parent element.
