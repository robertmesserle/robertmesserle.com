import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { getCurrentPhysicsValue, togglePhysics } from 'hooks/useBackgroundAnimation';

const PhysicsToggle: React.FC = React.memo(() => {
  const [physics, setPhysics] = React.useState(getCurrentPhysicsValue);

  const toggle = React.useCallback(() => {
    togglePhysics();
    setPhysics(getCurrentPhysicsValue());
  }, []);

  return (
    <Wrapper>
      <Inner onClick={toggle}>
        <FloatyLabel className={cn({ enabled: !physics })} />
        <ToggleWrapper>
          <ToggleDot className={cn({ right: physics })} />
        </ToggleWrapper>
        <BouncyLabel className={cn({ enabled: physics })} />
      </Inner>
    </Wrapper>
  );
});

export default PhysicsToggle;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Inner = styled.div`
  display: flex;
  opacity: 0.6;
  transition: 0.35s;
  transform-origin: center center;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const FloatyLabel = styled.div`
  font-family: var(--body-font);
  font-size: 16px;
  text-transform: uppercase;
  transition: 175ms linear;

  &.enabled {
    color: white;
  }

  &:before {
    content: 'Floaty';
  }
`;

const ToggleWrapper = styled.div`
  width: 60px;
  height: 35px;
  border-radius: 20px;
  background: var(--background-blue);
  position: relative;
  box-shadow: 0 0 15px rgba(156, 194, 201, 0.2);
  text-decoration: none;
`;

const ToggleDot = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: 25px;
  width: 25px;
  background: var(--light-blue);
  border-radius: 50%;
  transition: 0.35s ease-out;

  &.right {
    left: 30px;
  }
`;

const BouncyLabel = styled.div`
  font-family: var(--header-font);
  font-size: 35px;
  text-transform: uppercase;
  transition: 175ms linear;
  font-weight: 700;

  &.enabled {
    color: white;
  }

  &:before {
    content: 'Bouncy';
  }
`;
