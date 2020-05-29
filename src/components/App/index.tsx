import React from 'react';
import css from './index.module.scss';
import Background from 'components/Background';
import Hero from 'components/pages/Hero';
import About from 'components/pages/About';

const LAYERS = [
  {
    blur: 40,
    minSize: 400,
    maxSize: 800,
    count: 30,
    opacity: 0.3,
    animate: false,
  },
  {
    blur: 30,
    minSize: 200,
    maxSize: 600,
    count: 30,
    opacity: 0.3,
    animate: false,
  },
  {
    blur: 10,
    minSize: 100,
    maxSize: 500,
    count: 90,
    opacity: 0.3,
    animate: true,
  },
  {
    blur: 0,
    minSize: 15,
    maxSize: 200,
    count: 50,
    opacity: 0.5,
    animate: true,
  },
];

function App() {
  return (
    <>
      {LAYERS.map((layer, index) => (
        <Background config={layer} key={index} />
      ))}
      <div className={css.root}>
        <Hero />
        <About />
      </div>
    </>
  );
}

export default React.memo(App);
