import React from 'react';

import css from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

function SplitSection({ children }: Props) {
  return <div className={css.root}>{children}</div>;
}

export default SplitSection;
