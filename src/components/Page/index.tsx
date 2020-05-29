import React from 'react';

import css from './index.module.scss';

interface Props {
  children: React.ReactNode;
  header: string;
  subheader: string;
}

function Page({ children, header, subheader }: Props) {
  return (
    <div className={css.root}>
      <div className={css.header}>
        <h1>{header}</h1>
        <h2>{subheader}</h2>
      </div>
      {children}
    </div>
  );
}

export default React.memo(Page);
