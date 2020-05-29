import React from 'react';
import css from './index.module.scss';
import cn from 'classnames';

function Logo() {
  const types = [css.bg, css.fg];
  return (
    <div className={css.root}>
      {types.map((className) => (
        <svg
          className={cn(className)}
          key={className}
          viewBox='-8 -8 156 116'
          preserveAspectRatio='none'>
          <path d='M 20 15 l 0 65  c 0 20 5 20 40 5 c -20 5 -20 5 -20 0 l 0 -65 c 0 -20 -5 -20 -40 -5 c 20 -5 20 -5 20 0' />
          <path d='M 60 15 l 0 10 c 0 20 0 20 -20 30 c 20 -5 20 -5 20 0 l 0 25  c 0 20 5 20 40 5 c -20 5 -20 5 -20 0 l 0 -25 c 0 -20 -5 -20 -40 -5 c 20 -5 40 -15 40 -30 l 0 -5 c 0 -20 -5 -20 -40 -5 c 20 -5 20 -5 20 0' />
          <path
            className={className}
            d='M 100 15 l 0 65  c 0 20 5 20 40 5 c -20 5 -20 5 -20 0 l 0 -65 c 0 -20 -5 -20 -40 -5 c 20 -5 20 -5 20 0'
          />
        </svg>
      ))}
    </div>
  );
}

export default React.memo(Logo);
