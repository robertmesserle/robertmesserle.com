import React from 'react';
import css from './index.module.scss';
import PhysicsToggle from 'components/PhysicsToggle';
import Logo from 'components/Logo';

function Hero() {
  return (
    <div className={css.root}>
      <div className={css.flexGrow} />
      <Logo />
      <h1 className={css.title}>
        Robert
        <span>Messerle</span>
        <sub>.com</sub>
      </h1>
      <h2 className={css.subtitle}>
        Frontend Web Developer <span className={css.nowrap}>(and Designer)</span>
      </h2>
      <div className={css.flexGrow} />
      <PhysicsToggle />
      <div className={css.downArrow} />
    </div>
  );
}

export default Hero;
