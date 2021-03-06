import React from 'react';
import css from './index.module.scss';
import cn from 'classnames';

interface Props {
  centered?: boolean;
  children: React.ReactNode;
  title?: string;
}

function Section({ centered = false, children, title }: Props) {
  return (
    <div
      className={cn(css.root, {
        [css.centered]: centered,
      })}>
      {title != null && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Section;
