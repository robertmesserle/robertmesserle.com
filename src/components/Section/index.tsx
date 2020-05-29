import React from 'react';
import css from './index.module.scss';

interface Props {
  centered?: boolean;
  children: React.ReactNode;
  title?: string;
}

function Section({ centered = false, children, title }: Props) {
  return (
    <div className={css.root}>
      {title != null && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default React.memo(Section);
