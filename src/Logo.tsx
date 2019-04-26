import * as React from 'react';
import styled from 'styled-components';
import { memo } from 'react';

const Logo: React.FC = memo(() => {
  const types = ['bg', 'fg'];

  return (
    <Container>
      {types.map((type, index) => (
        <Svg
          key={index}
          data-type={type}
          viewBox="-8 -8 156 116"
          preserveAspectRatio="none">
          <Path d="M 20 15 l 0 65  c 0 20 5 20 40 5 c -20 5 -20 5 -20 0 l 0 -65 c 0 -20 -5 -20 -40 -5 c 20 -5 20 -5 20 0" />
          <Path d="M 60 15 l 0 10 c 0 20 0 20 -20 30 c 20 -5 20 -5 20 0 l 0 25  c 0 20 5 20 40 5 c -20 5 -20 5 -20 0 l 0 -25 c 0 -20 -5 -20 -40 -5 c 20 -5 40 -15 40 -30 l 0 -5 c 0 -20 -5 -20 -40 -5 c 20 -5 20 -5 20 0" />
          <Path
            d="M 100 15 l 0 65  c 0 20 5 20 40 5 c -20 5 -20 5 -20 0 l 0 -65 c 0 -20 -5 -20 -40 -5 c 20 -5 20 -5 20 0"
            data-type={type}
          />
        </Svg>
      ))}
    </Container>
  );
});

export default Logo;

const Container = styled.div`
  --size: 300px;

  opacity: 0.9;
  height: var(--size);
  width: calc(var(--size) * 0.85);
  position: relative;
  margin: 0 auto;
  z-index: 15;
`;

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: var(--size);
  width: calc(var(--size) * 0.85);

  &[data-type='bg'] {
    filter: blur(8px);
    -webkit-filter: blur(8px);
    opacity: 0.6;
  }
`;

const Path = styled.path`
  fill: white;
  &[data-type='fg'] {
    fill: #121f21;
  }
`;
