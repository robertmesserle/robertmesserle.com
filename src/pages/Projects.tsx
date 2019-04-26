import React, { memo } from 'react';
import styled from 'styled-components';

import Page from '../Page';
import Section from '../Section';
import SplitSection from '../helpers/SplitSection';

const Projects: React.FC = memo(() => (
  <Page header="projects" subheader="I've worked on">
    <Section title="Angular">
      <p>
        Angular is an application framework used to build maintainable
        single-page applications.
      </p>
      <ProjectLinks
        website="https://angular.io"
        github="https://github.com/angular/angular"
      />
    </Section>
    <Section title="Angular Material">
      <p>
        While at Google, my primary focus was on <b>Angular Material</b> - a
        frontend library that makes it easy to create beautiful interfaces with
        Angular. This library was based on Google's <b>Material Design</b>{' '}
        specifications.
      </p>
      <ProjectLinks
        website="https://material.angular.io"
        github="https://github.com/angular/material2"
      />
    </Section>
  </Page>
));

export default Projects;

const ProjectLinks: React.FC<{ website: string; github: string }> = memo(
  ({ website, github }) => {
    return (
      <Nav>
        <SplitSection>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-external-link" />
            <span>Website</span>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" />
            <span>Github</span>
          </a>
        </SplitSection>
      </Nav>
    );
  }
);

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: var(--medium-blue);
    border: 1px solid var(--medium-blue);
    height: 40px;
    transition: 0.25s;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: white;
      &:before {
        transform: none;
      }
    }

    i.fa {
      margin-right: 10px;
      position: relative;
      z-index: 5;
      font-size: 1.5em;
      vertical-align: center;
    }

    span {
      position: relative;
      z-index: 5;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      background: var(--medium-blue);
      transform: rotate(90deg);
      transform-origin: -50px -10px;
      transition: 0.25s;
      z-index: 0;
    }
  }
`;
