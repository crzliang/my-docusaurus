import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Me',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      <a href='./about'>关于</a>
      </>
    ),
  },
  // {
  //   title: 'old blog',
  //   // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //     <a target="_blank" href="https://hexo.a1pha.cn/" ></a>
  //     </>
  //   ),
  // },
  {
    title: 'Contact Me',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <a href="mailto:crzliang@qq.com" target="_blank" title="Email">crzliang@qq.com</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
