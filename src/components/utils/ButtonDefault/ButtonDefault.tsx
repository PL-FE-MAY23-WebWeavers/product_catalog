import React from 'react';
import './buttonDefault.scss';
import cn from 'classnames';

export const ButtonDefault = () => {
  return (
    <button
      className={cn({
        'button-default': true,
        'button-default__added': false,
      })}
    >
      Add to cart
    </button>
  );
};
