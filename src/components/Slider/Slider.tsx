import React from 'react';
import './slider.scss';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import cn from 'classnames';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';
import { useSliderHook } from '../../hooks/useSliderHook';

export const Slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 10000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const images = [
    'https://webweavers.onrender.com/img/banner-phones.png',
    'https://webweavers.onrender.com/img/banner-tablets.png',
    'https://webweavers.onrender.com/img/banner-accessories.png'
  ];
  const { isMobileView } = useSliderHook({images});

  return (
    <>
      <div className='slider sliderWrapper'>
        {!isMobileView && <ButtonSlide
          arrow={ButtonSlideEnum.left}
          setDisable={false}
          onClickFunction={() => swiper.slidePrev()}
        />}
        <div className="swiper swipeable-content">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img className='swipeable-item' src={images[0]}/></div>

            <div className="swiper-slide"><img className='swipeable-item' src={images[1]}/></div>

            <div className="swiper-slide"><img className='swipeable-item' src={images[2]}/></div>
          </div>
        </div>

        {!isMobileView && <ButtonSlide
          arrow={ButtonSlideEnum.right}
          setDisable={false}
          onClickFunction={() => swiper.slideNext()}
        />}
      </div>

      <div className='swiper-pagination'></div>
    </>
  );
};
