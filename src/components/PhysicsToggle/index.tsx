import { getCurrentPhysicsValue } from 'hooks/useBackgroundAnimation';
import cn from 'classnames';
import React from 'react';
import { togglePhysics } from '../../hooks/useBackgroundAnimation';
import css from './index.module.scss';

function PhysicsToggle() {
  const [physics, setPhysics] = React.useState(getCurrentPhysicsValue);

  const toggle = React.useCallback(() => {
    togglePhysics();
    setPhysics(getCurrentPhysicsValue());
  }, []);

  return (
    <div className={css.root}>
      <div className={css.inner} onClick={toggle}>
        <div className={cn(css.floatyLabel, { [css.enabled]: !physics })} />
        <div className={css.toggleWrapper}>
          <div className={cn(css.toggleDot, { [css.right]: physics })} />
        </div>
        <div className={cn(css.bouncyLabel, { [css.enabled]: physics })} />
      </div>
    </div>
  );
}

export default React.memo(PhysicsToggle);
