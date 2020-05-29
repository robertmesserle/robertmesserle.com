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
      <header className={css.header}>
        <h1>{header}</h1>
        <h2>{subheader}</h2>
      </header>
      {children}
    </div>
  );
}

export default Page;
