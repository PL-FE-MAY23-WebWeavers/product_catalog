import React, { useEffect, useState } from 'react';
import './cardsSlider.scss';
import { Phone } from '../../types/Phones';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import { Card } from '../Card/Card';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Mousewheel } from 'swiper/modules';

type CardsSliderProps = {
  items: Phone[];
  title: string;
};

enum WhichView {
  mobile = 1.5,
  tablet = 2.5,
  desktop = 4,
}

export const CardsSlider = ({ items, title }: CardsSliderProps) => {
  const slides = [...items];
  const [whichView, setWhichView] = useState<WhichView>(1.5);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleResize = () => {
    setWhichView(() => {
      if (window.innerWidth <= 639) return WhichView.mobile;
      if (window.innerWidth >= 1200) return WhichView.desktop;
      return WhichView.tablet;
    });
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slideLeft = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const slideRight = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="cards-slider__section">
        <div className="section__title">
          <h2 className="title">{title}</h2>
          <ButtonSlide
            arrow={ButtonSlideEnum.left}
            setDisable={false}
            onClickFunction={slideLeft}
          />
          <ButtonSlide
            arrow={ButtonSlideEnum.right}
            setDisable={false}
            onClickFunction={slideRight}
          />
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={whichView}
        modules={[Navigation, A11y, Mousewheel]}
        onSwiper={(swiper: SwiperClass) => setSwiper(swiper)}
        mousewheel
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Card item={slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
