import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Card Window requires only 3 props.<br />
        And it has simple option props.<br />
        Check out the tutorial right away!
      </>
    ),
  },
  {
    title: 'Automatically Adjust Columns',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        The card window uses <code>ResizeObserver</code> internally. Therefore, the column is automatically adjusted
        according to the element size specified by CSS.
      </>
    ),
  },
  {
    title: 'Inspired by "react-window"',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        It works by only rendering part of a large data set (just enough to fill the viewport).
        It is very much inspired by Brian Vaughn's react-window.
      </>
    ),
  },
];

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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
