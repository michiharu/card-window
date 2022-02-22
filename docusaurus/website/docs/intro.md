---
id: "intro"
sidebar_position: 1
---

# Introduction

## Installation

`card-window` is available as an npm package.

### with npm

```bash
npm install card-window
```

### with yarn

```bash
yarn add card-window
```

## Usage

```typescript
import * as React from 'react';
import ReactDOM from 'react-dom';

import { CardWindow, CardProps, range } from 'card-window';

const SampleCard: React.FC<CardProps> = ({ index, style, row, col }) => (
  <div style={style}>
    <h2>{index}</h2>
    <p>row: {row}, col: {col}</p>
  </div>
);

const App: React.FC = () => {
  const data = range(10000); // [0, 1, 2, ..., 9999]
  const cardRect = { width: 200, height: 120 };
  return (
    <div style={{ height: 400 }}>
      <CardWindow data={data} cardRect={cardRect}>
        {SampleCard}
      </CardWindow>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
```
