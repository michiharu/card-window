import { CardWindow } from 'card-window';

function App() {
  const cardRect = { width: 200, height: 300 };
  const data = [...Array(1000)].map((_, i) => i);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <CardWindow data={data} card={cardRect}>
        {({ data, index, style }) => (
          <div style={style}>
            <h2>{index}</h2>
            <div style={{ backgroundColor: '#0001' }}>{JSON.stringify(style, undefined, 2)}</div>
          </div>
        )}
      </CardWindow>
    </div>
  );
}

export default App;
