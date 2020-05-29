import React from 'react';
import useBackgroundAnimation, { BackgroundConfig } from 'hooks/useBackgroundAnimation';
import css from './index.module.scss';

interface Props {
  config: BackgroundConfig;
}

function Background({ config }: Props) {
  const ref = React.useRef<HTMLDivElement>(null);
  useBackgroundAnimation(ref, config);

  return <div className={css.root} ref={ref} />;
}

export default Background;
