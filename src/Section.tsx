import * as React from 'react';
import styled from 'styled-components';

const { memo } = React;

interface Props {
  centered?: boolean;
  children: React.ReactNode;
  title?: string;
}

const Section: React.FC<Props> = ({ centered = false, children, title }) => (
  <Container data-align={centered && 'center'}>
    {title != null && <h1>{title}</h1>}
    {children}
  </Container>
);

export default memo(Section);

const Container = styled.div`
  border: 1px solid var(--medium-blue);
  color: var(--dark-blue);
  font: 600 12px/2em var(--body-font);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 50px;

  &[data-align='center'] {
    text-align: center;
  }

  &:nth-of-type(odd) {
    background: var(--section-background);
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }
  
  @media(max-width: 800px) {
    border: none;
    background: var(--section-background-mobile);
    color: var(--light-blue);
    &:nth-of-type(odd) {
      background: var(--section-background-mobile-odd);
    }
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

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
