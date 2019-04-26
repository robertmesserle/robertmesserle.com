import * as React from 'react';

import Page from '../Page';
import Section from '../Section';
import { memo } from 'react';

const About = memo(() => {
  return (
    <Page header="about" subheader="Me, Myself, and I">
      <Section title="Who are you?">
        <p>
          As you have probably gathered by now, my name is Robert Messerle and
          I've been developing webs for nearly 20 years. My primary skills are{' '}
          <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and Oxford Commas;
          however, my interests span the entire web development stack.{' '}
        </p>
        <p>
          While I've spent most of my professional career writing code, I also
          have a strong interest in design. As such, I tend to enjoy working
          with more visual projects and pushing pixels around like some sort of
          pixel-bully.
        </p>
        <p>
          I am currently a frontend web developer at <b>Facebook</b>, tinkering
          with <b>React</b> and evangelizing <b>React Hooks</b>! Before that, I
          was a member of the <b>Angular</b> team at <b>Google</b>, obsessing
          over Animations and Material Design. And before that, I'm sure some
          other stuff happened, but I can't be expected to remember that far
          back.
        </p>
      </Section>
    </Page>
  );
});

export default About;
