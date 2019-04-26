import * as React from 'react';
import styled from 'styled-components';

const { Fragment } = React;

import About from './pages/About';
import CodePen from './pages/CodePen';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import StalkMe from './pages/StalkMe';

import Background from './Background';
import Copyright from "./Copyright";

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

const App = () => {
  return (
    <Fragment>
      {LAYERS.map((layer, index) => (
        <Background config={layer} key={index} />
      ))}
      <Container>
        <Hero />
        <About />
        <Projects />
        <CodePen />
        <StalkMe />
        <Hidden>
          <Contact />
        </Hidden>
        <Copyright />
      </Container>
    </Fragment>
  );
};

export default App;

const Hidden = styled.div`
  display: none;
`;

const Container = styled.div`
  height: 100%;
  position: relative;
  z-index: 1;
`;
