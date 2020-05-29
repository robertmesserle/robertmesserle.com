import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';
import PhysicsToggle from 'components/PhysicsToggle';

const Hero = () => {
  return (
    <Container>
      <FlexGrow />
      <Logo />
      <Title>
        Robert
        <span>Messerle</span>
        <sub>.com</sub>
      </Title>
      <Subtitle>
        Frontend Web Developer <NoWrap>(and Designer)</NoWrap>
      </Subtitle>
      <FlexGrow />
      <PhysicsToggle />
      <DownArrow />
    </Container>
  );
};

export default React.memo(Hero);

const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 50px;
  text-align: center;
  margin: 0 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexGrow = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font: 300 30px/30px var(--header-font);
  text-transform: uppercase;
  margin: 30px 0 0;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  color: white;
  letter-spacing: 1px;
  z-index: 100;

  span {
    color: var(--light-blue);
    font-size: 1.2em;
  }

  sub {
    font-size: 0.6em;
    position: relative;
    bottom: 0.4em;
  }
`;

const NoWrap = styled.span`
  white-space: nowrap;
`;

const Subtitle = styled.h2`
  font: 300 20px var(--header-font);
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  color: var(--lighter-blue);
  letter-spacing: 1px;
  z-index: 100;
`;

const DownArrow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  text-align: center;
  animation-name: wobble;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  &:before {
    content: '\f078';
    font-size: 40px;
    font-family: FontAwesome, sans-serif;
    color: var(--medium-blue);
  }
`;
