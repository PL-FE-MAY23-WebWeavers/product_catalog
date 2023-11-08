import React from 'react';
import './buttonSlide.scss';
import cn from 'classnames';
import { ButtonSlideEnum } from '../../../types/ButtonSlideEnum';

type ButtonSlideProps = {
arrow: ButtonSlideEnum,
setDisable: boolean;
onClickFunction: () => void;
}

export const ButtonSlide = ({
  arrow,
  setDisable,
  onClickFunction,
}: ButtonSlideProps) => {
  return (
    <div
      onClick={onClickFunction}
      className={cn('button-slide', {
        'button-slide--up': arrow === ButtonSlideEnum.up,
        'button-slide--down': arrow === ButtonSlideEnum.down,
        'button-slide--left': arrow === ButtonSlideEnum.left,
        'button-slide--right': arrow === ButtonSlideEnum.right,
        'button-slide--disabled': setDisable,
      })}></div>
  );
};
