import React, { useEffect, useRef } from 'react';
import './slider.scss';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';
import { useSliderHook } from '../../hooks/useSliderHook';

export const Slider = () => {
  const images = [
    'https://webweavers-app.onrender.com/img/banner-phones.webp',
    'https://webweavers-app.onrender.com/img/banner-tablets.webp',
    'https://webweavers-app.onrender.com/img/banner-accessories.webp',
  ];
  const { isMobileView } = useSliderHook({ images });

  const swiperRef = useRef<Swiper | undefined>();

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
  }, []);

  return (
    <>
      <div className="slider sliderWrapper">
        {!isMobileView && (
          <ButtonSlide
            arrow={ButtonSlideEnum.left}
            setDisable={false}
            onClickFunction={() => swiperRef.current?.slidePrev()}
          />
        )}
        <div className="swiper swipeable-content">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swipeable-item">
                <img className="item-img" src={images[0]} alt="phones" />
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swipeable-item">
                <img className="item-img" src={images[1]} alt="tablets" />
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swipeable-item">
                <img className="item-img" src={images[2]} alt="accesories" />
              </div>
            </div>
          </div>
        </div>

        {!isMobileView && (
          <ButtonSlide
            arrow={ButtonSlideEnum.right}
            setDisable={false}
            onClickFunction={() => swiperRef.current?.slideNext()}
          />
        )}
      </div>

      {/* <div className='swiper-pagination'></div> */}
    </>
  );
};
