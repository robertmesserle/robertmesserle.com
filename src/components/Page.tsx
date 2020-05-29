import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  header: string;
  subheader: string;
}

const Page: React.FC<Props> = React.memo(({ children, header, subheader }) => {
  return (
    <Container>
      <HeaderWrapper>
        <Header>{header}</Header>
        <Subheader>{subheader}</Subheader>
      </HeaderWrapper>
      {children}
    </Container>
  );
});

export default Page;

const Container = styled.div`
  background: white;
  overflow: hidden;
  padding: 50px 100px 100px;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  & + & {
    margin-top: 100px;
  }

  @media (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    background: var(--background-lighter-blue);
    margin: 0;
  }
`;

const HeaderWrapper = styled.header`
  margin: 0 0 50px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Header = styled.h1`
  font: 300 40px/40px var(--header-font);
  color: var(--dark-blue);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
  margin: 0;

  @media (max-width: 800px) {
    color: white;
  }
`;

const Subheader = styled.h2`
  font: 300 22px var(--header-font);
  color: var(--medium-blue);
  margin: 0;
`;
