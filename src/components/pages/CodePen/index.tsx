import React from 'react';

import Page from 'components/Page';

import BoxTransitionImage from './img/codepen/box-transition.png';
import CalendarImage from './img/codepen/calendar.png';
import CardsImage from './img/codepen/css-cards.png';
import ContrastImage from './img/codepen/contrast-color.png';
import FixedContentImage from './img/codepen/fixed-reveal.png';
import TextImage from './img/codepen/css-text.png';
import SocialImage from './img/codepen/social-icons.png';
import SpiralImage from './img/codepen/spiral.png';

import css from './index.module.scss';

function CodePen() {
  return (
    <Page header='codepen' subheader='tinkerings'>
      <Pen
        href='https://codepen.io/robertmesserle/pen/RevENb'
        title='Fixed Content Reveal'
        img={FixedContentImage}>
        <p>
          This was an idea I had to reveal fixed content on scroll rather than scrolling the
          content. It was also an opportunity for me to experiment with <b>React Hooks</b>.
        </p>
      </Pen>
      <Pen
        href='https://codepen.io/robertmesserle/pen/zdpai'
        title='Animated Spiral'
        img={SpiralImage}>
        <p>
          I was feeling mathy at some point, so I decided to write something to animate an
          infinitely growing spiral. The idea was to continually calculate a specific distance
          around the outside of the spiral for the next dot to be placed.
        </p>
      </Pen>
      <Pen
        href='http://codepen.io/robertmesserle/pen/JoEBqr'
        title='Calendar Concept'
        img={CalendarImage}>
        <p>
          An idea I had based on the <b>Material Design</b> hierarchical timing examples.
        </p>
      </Pen>
      <Pen
        href='https://codepen.io/robertmesserle/pen/GgJvjB'
        title='Material Box Reveal'
        img={BoxTransitionImage}>
        <p>This was a first attempt at a reveal effect seen in the Material Design spec.</p>
      </Pen>
      <Pen
        href='http://codepen.io/robertmesserle/pen/ytrKI'
        title='CSS Text Effect'
        img={TextImage}>
        <p>
          An idea I had for using CSS3's <b>:nth-of-type()</b> selector to alternate styles between
          letters.
        </p>
      </Pen>
      <Pen
        href='http://codepen.io/robertmesserle/pen/raJVmX'
        title='Contrast Color Tool'
        img={ContrastImage}>
        <p>
          A tool for determining the best contrast color (black or white) for a given background
          color.
        </p>
      </Pen>
      <Pen
        href='https://codepen.io/robertmesserle/pen/yNPdwZ'
        title='CSS Playing Cards'
        img={CardsImage}>
        <p>
          At some point in time, I wanted to write a card game in JS. I lacked the necessary playing
          cards, so I decided to make some. Sadly, I got caught up with that part and never got
          around to writing the actual game.
        </p>
      </Pen>
      <Pen
        href='http://codepen.io/robertmesserle/pen/tEAxc'
        title='CSS Social Media Icons'
        img={SocialImage}>
        <p>
          I don't really have an explanation for <b>why</b> I made this, but I did. It serves no
          practical purpose, but it was fun to make.
        </p>
      </Pen>
    </Page>
  );
}

export default CodePen;

interface PenProps {}

function Pen({
  children,
  href,
  img,
  title,
}: {
  children: React.ReactNode;
  href: string;
  title: string;
  img: string;
}) {
  return (
    <a className={css.link} href={href} target='_blank' rel='noopener noreferrer'>
      <img className={css.image} src={img} alt={title} />
      <div className={css.content}>
        <h1>{title}</h1>
        {children}
      </div>
    </a>
  );
}
