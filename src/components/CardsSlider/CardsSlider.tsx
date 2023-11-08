import React, { useEffect, useRef, useState } from 'react';
import './cardsSlider.scss';
import { Phone } from '../../types/Phones';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import { Card } from '../Card/Card';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/scss/autoplay';


type CardsSliderProps = {
  items: Phone[],
  title: string,
}

enum WhichView {
  mobile = 1.5,
  tablet = 2.5,
  desktop = 4,
}

export const CardsSlider = ({ items, title }: CardsSliderProps ) => {
  const slides = [1,2,3,4,5,6].map(m => {
    return (
      {
        ...items[0],
        id: m,
      }
    );
  });
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [whichView, setWhichView] = useState<WhichView | null>();

  useEffect(() => {
    const handleResize = () => {
      setWhichView(() => {
        if (window.innerWidth <= 639) return WhichView.mobile;
        if (window.innerWidth >= 1200) return WhichView.desktop;
        return WhichView.tablet;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? length - 1 : current - 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (<>
    <section className='slider-models'>
    </section>
    <div className='cards-slider__section'>
      <div className='section__title'>
        <h2 className='title'>{title}</h2>
        <ButtonSlide
          arrow={ButtonSlideEnum.left}
          setDisable={current === 0}
          onClickFunction={() => prevSlide()}
        />
        <ButtonSlide
          arrow={ButtonSlideEnum.right}
          setDisable={current === length - 1}
          onClickFunction={() => nextSlide()}
        />
      </div>
      <div className='section__items'>
        <div className='items__board'>

          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                <div className='items__item'>
                  <Card item={slide}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  </>
  );
};
