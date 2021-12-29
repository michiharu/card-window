/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { CardWindow } from 'card-window';

const Card = ({ index, style }) => (
  <div className="card" style={{ ...style, height: style.height - 16 }}>
    <div className="card__body">
      <h2>{index}</h2>
    </div>
  </div>
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  CardWindow,
  Card,
};

export default ReactLiveScope;
