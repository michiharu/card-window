/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

type Props = {
  data: any[];
  index: number;
  style: React.CSSProperties;
};

const SamplCard: React.FC<Props> = ({ data, index, style }) => (
  <div style={{ ...style, backgroundColor: '#fff' }}>
    <div style={{ padding: 16 }}>
      <h2>{data[index]}</h2>
    </div>
  </div>
);

export default SamplCard;
