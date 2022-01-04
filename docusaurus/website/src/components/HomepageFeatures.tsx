import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { CardWindow } from 'card-window';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/card-window/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Card Window requires only 3 props.
        <br />
        And it has simple option props.
        <br />
        Check out the tutorial right away!
      </>
    ),
  },
  {
    title: 'Automatically Adjust Columns',
    image: '',
    description: (
      <>
        The card window uses <code>ResizeObserver</code> internally. Therefore, the column is automatically adjusted
        according to the element size specified by CSS.
      </>
    ),
  },
  {
    title: 'Inspired by "react-window"',
    image: '/card-window/img/undraw_docusaurus_react.svg',
    description: (
      <>
        It works by only rendering part of a large data set (just enough to fill the viewport). It is very much inspired
        by Brian Vaughn's react-window.
      </>
    ),
  },
];

const range = (_start: number, _end?: number): number[] => {
  const start = _end === undefined ? 0 : _start;
  const end = _end ?? _start;
  const list: number[] = [];
  for (let i = start; i < end; i += 1) list.push(i);
  return list;
};

const seed = (int: number) => Math.floor(Math.random() * int);
const cardSize = 80;

function FeatureDemo({ title, description }: FeatureItem) {
  const ref = React.useRef(range(1001).map(() => seed(100)));
  
  return (
    <div className={clsx('col col--4')}>
      <div
        className={styles.demo}
        style={{ marginTop: 20, marginBottom: 20, marginLeft: 'auto', marginRight: 'auto' }}
      >
        <CardWindow
          data={ref.current}
          cardRect={{ width: cardSize, height: cardSize }}
          style={{ height: 160 }}
          innerStyle={{ background: 'linear-gradient(65deg, #F13F79, #2196f3)' }}
          lastRowAlign="left"
        >
          {({ data, index, style }) => (
            <div style={{...style, borderRadius: 'var(--ifm-card-border-radius)', overflow: 'hidden'}}>
              <img alt="docusaurus" src={`https://picsum.photos/seed/${data[index]}/${cardSize}/${cardSize}`} />
            </div>
          )}
        </CardWindow>
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature {...FeatureList[0]} />
          <FeatureDemo {...FeatureList[1]} />
          <Feature {...FeatureList[2]} />
        </div>
      </div>
    </section>
  );
}
