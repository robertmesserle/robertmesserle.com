import * as React from 'react';
import styled from 'styled-components';

import Page from '../Page';

import BoxTransitionImage from './img/codepen/box-transition.png';
import CalendarImage from './img/codepen/calendar.png';
import CardsImage from './img/codepen/css-cards.png';
import ContrastImage from './img/codepen/contrast-color.png';
import FixedContentImage from './img/codepen/fixed-reveal.png';
import TextImage from './img/codepen/css-text.png';
import SocialImage from './img/codepen/social-icons.png';
import SpiralImage from './img/codepen/spiral.png';

const { memo } = React;

const CodePen: React.FC = memo(() => {
  return (
    <Page header="codepen" subheader="tinkerings">
      <Pen
        href="https://codepen.io/robertmesserle/pen/RevENb"
        title="Fixed Content Reveal"
        img={FixedContentImage}>
        <p>
          This was an idea I had to reveal fixed content on scroll rather than
          scrolling the content. It was also an opportunity for me to experiment
          with <b>React Hooks</b>.
        </p>
      </Pen>
      <Pen
        href="https://codepen.io/robertmesserle/pen/zdpai"
        title="Animated Spiral"
        img={SpiralImage}>
        <p>
          I was feeling mathy at some point, so I decided to write something to
          animate an infinitely growing spiral. The idea was to continually
          calculate a specific distance around the outside of the spiral for the
          next dot to be placed.
        </p>
      </Pen>
      <Pen
        href="http://codepen.io/robertmesserle/pen/JoEBqr"
        title="Calendar Concept"
        img={CalendarImage}>
        <p>
          An idea I had based on the <b>Material Design</b> hierarchical timing
          examples.
        </p>
      </Pen>
      <Pen
        href="https://codepen.io/robertmesserle/pen/GgJvjB"
        title="Material Box Reveal"
        img={BoxTransitionImage}>
        <p>
          This was a first attempt at a reveal effect seen in the Material
          Design spec.
        </p>
      </Pen>
      <Pen
        href="http://codepen.io/robertmesserle/pen/ytrKI"
        title="CSS Text Effect"
        img={TextImage}>
        <p>
          An idea I had for using CSS3's <b>:nth-of-type()</b> selector to
          alternate styles between letters.
        </p>
      </Pen>
      <Pen
        href="http://codepen.io/robertmesserle/pen/raJVmX"
        title="Contrast Color Tool"
        img={ContrastImage}>
        <p>
          A tool for determining the best contrast color (black or white) for a
          given background color.
        </p>
      </Pen>
      <Pen
        href="https://codepen.io/robertmesserle/pen/yNPdwZ"
        title="CSS Playing Cards"
        img={CardsImage}>
        <p>
          At some point in time, I wanted to write a card game in JS. I lacked
          the necessary playing cards, so I decided to make some. Sadly, I got
          caught up with that part and never got around to writing the actual
          game.
        </p>
      </Pen>
      <Pen
        href="http://codepen.io/robertmesserle/pen/tEAxc"
        title="CSS Social Media Icons"
        img={SocialImage}>
        <p>
          I don't really have an explanation for <b>why</b> I made this, but I
          did. It serves no practical purpose, but it was fun to make.
        </p>
      </Pen>
    </Page>
  );
});

export default CodePen;

interface PenProps {
  children: React.ReactNode;
  href: string;
  title: string;
  img: string;
}

const Pen: React.FC<PenProps> = memo(({ children, href, img, title }) => {
  return (
    <Link href={href} target="_blank">
      <Image src={img} />
      <Content>
        <h1>{title}</h1>
        {children}
      </Content>
    </Link>
  );
});

const Link = styled.a`
  border: 1px solid var(--medium-blue);
  color: var(--dark-blue);
  font: 600 12px/2em var(--body-font);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 50px;
  display: flex;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: var(--medium-blue);
    transform: rotate(90deg);
    transform-origin: -20% -20%;
    transition: 0.25s;
    z-index: 5;
    opacity: 0.8;
  }

  &:after {
    content: '\f14c';
    position: absolute;
    left: 50%;
    top: 50%;
    opacity: 0;
    color: white;
    font-size: 80px;
    font-family: FontAwesome;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    pointer-events: none;
    transition: 0.65s;
    z-index: 10;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &:before {
      transform: none;
    }
    &:after {
      opacity: 1;
    }
  }

  &:nth-of-type(odd) {
    background: var(--section-background);
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (max-width: 800px) {
    margin-bottom: 0;
    border: none;
    background: var(--section-background-mobile);
    color: var(--lighter-blue);
    &:nth-of-type(odd) {
      background: var(--section-background-mobile-odd);
    }
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

const Image = styled.img`
  --size: 160px;

  display: block;
  width: var(--size);
  height: var(--size);
  border: 1px solid var(--medium-blue);
  margin-right: 30px;
  flex-shrink: 0;
  flex-grow: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 1.5em;
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    b {
      border-bottom: 1px solid var(--light-blue);
    }
  }
`;
