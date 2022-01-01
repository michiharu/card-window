---
id: "intro"
sidebar_position: 1
---

# Introduction

## Installation

card-window is available as an npm package.

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

import { CardWindow } from 'card-window';

type CardProps = {
  data: any[];
  index: number;
  style: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({ data, index, style }) => (
  <div style={{ ...style, backgroundColor: '#fff' }}>
    <div style={{ padding: 16 }}>
      <h2>{data[index]}</h2>
    </div>
  </div>
);

const App: React.FC = () => {
  const data = [...Array(10000)].map((_, i) => i);
  const cardRect = { width: 300, height: 200 };
  return (
    <CardWindow data={data} cardRect={cardRect} >
      {Card}
    </CardWindow>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
```
