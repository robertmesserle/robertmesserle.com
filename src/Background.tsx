import * as React from 'react';
import styled from 'styled-components';
import useBackgroundAnimation, {
  BackgroundConfig,
} from './helpers/hooks/useBackgroundAnimation';
import { memo, useLayoutEffect, useRef } from 'react';

interface Props {
  config: BackgroundConfig;
}

const Background: React.FC<Props> = memo(({ config }) => {
  const canvas = useBackgroundAnimation(config);
  const ref = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    ref.current && ref.current.appendChild(canvas);
  }, [canvas, ref.current]);

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
