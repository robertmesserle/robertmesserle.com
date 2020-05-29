import React from 'react';

import css from './index.module.scss';

const Copyright = React.memo(() => {
  return <div className={css.root}>Copyright &copy; 2019 Robert Messerle.</div>;
});

export default React.memo(Copyright);
