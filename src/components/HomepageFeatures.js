import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Documentations',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Write study notes, training self to turn input into output,
        and turn knowledge in your mind into articles.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Every experiment and challenge is recorded. Sharing mindset
        and practice better to best.
      </>
    ),
  },
  {
    title: 'The Extended Mind',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Work in process.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
