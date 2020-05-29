import React from 'react';

import Page from 'components/Page';
import Section from 'components/Section';
import SplitSection from 'components/SplitSection';

import css from './index.module.scss';

const Projects: React.FC = () => (
  <Page header='projects' subheader="I've worked on">
    <Section title='Angular'>
      <p>
        Angular is an application framework used to build maintainable single-page applications.
      </p>
      <ProjectLinks website='https://angular.io' github='https://github.com/angular/angular' />
    </Section>
    <Section title='Angular Material'>
      <p>
        While at Google, my primary focus was on <b>Angular Material</b> - a frontend library that
        makes it easy to create beautiful interfaces with Angular. This library was based on
        Google's <b>Material Design</b> specifications.
      </p>
      <ProjectLinks
        website='https://material.angular.io'
        github='https://github.com/angular/material2'
      />
    </Section>
  </Page>
);

export default Projects;

function ProjectLinks({ website, github }: { website: string; github: string }) {
  return (
    <nav className={css.nav}>
      <SplitSection>
        <a href={website} target='_blank' rel='noopener noreferrer'>
          <i className='fa fa-external-link' />
          <span>Website</span>
        </a>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <i className='fa fa-github' />
          <span>Github</span>
        </a>
      </SplitSection>
    </nav>
  );
}
