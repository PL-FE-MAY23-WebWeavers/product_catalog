import React from 'react';
import './buttonSlide.scss';
import cn from 'classnames';
import { ButtonSlideEnum } from '../../../types/ButtonSlideEnum';

type ButtonSlideProps = {
  arrow: ButtonSlideEnum;
  setDisable: boolean;
  onClickFunction: () => void;
};

export const ButtonSlide = ({
  arrow,
  setDisable,
  onClickFunction,
}: ButtonSlideProps) => {
  const getAriaLabel = () => {
    switch (arrow) {
      case ButtonSlideEnum.up:
        return 'Slide Up';
      case ButtonSlideEnum.down:
        return 'Slide Down';
      case ButtonSlideEnum.left:
        return 'Slide Left';
      case ButtonSlideEnum.right:
        return 'Slide Right';
      default:
        return '';
    }
  };

  return (
    <div
      onClick={onClickFunction}
      className={cn('button-slide', {
        'button-slide--up': arrow === ButtonSlideEnum.up,
        'button-slide--down': arrow === ButtonSlideEnum.down,
        'button-slide--left': arrow === ButtonSlideEnum.left,
        'button-slide--right': arrow === ButtonSlideEnum.right,
        'button-slide--disabled': setDisable,
      })}
      aria-label={getAriaLabel()}
    ></div>
  );
};
