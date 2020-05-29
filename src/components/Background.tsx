import React from 'react';
import styled from 'styled-components';
import useBackgroundAnimation, { BackgroundConfig } from 'hooks/useBackgroundAnimation';

interface Props {
  config: BackgroundConfig;
}

const Background: React.FC<Props> = React.memo(({ config }) => {
  const canvas = useBackgroundAnimation(config);
  const ref = React.useRef<HTMLDivElement>();

  React.useLayoutEffect(() => {
    ref.current && ref.current.appendChild(canvas);
  }, [canvas]);

  return <Container ref={ref as any} />;
});

export default Background;
const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`;
