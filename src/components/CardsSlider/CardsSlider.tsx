import React, { useEffect, useRef, useState } from 'react';
import './cardsSlider.scss';
import { Phone } from '../../types/Phones';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import { Card } from '../Card/Card';

type CardsSliderProps = {
  items: Phone[];
  title: string;
  id: number; // you should add id if you are using more than one of this component on one site
};

enum WhichView {
  mobile = 1.5,
  tablet = 2.5,
  desktop = 4,
}

export const CardsSlider = ({ items, title, id = 1 }: CardsSliderProps) => {
  const slides = [...items];
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [whichView, setWhichView] = useState<WhichView | null>(null);
  const itemsBoardRef = useRef<HTMLDivElement | null>(null);

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
    setCurrent((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  const slideRight = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? length - 1 : prev + 1));
  };

  const slide = () => {
    let itemWidth;

    if (whichView === WhichView.mobile) {
      itemWidth = 228;
    } else if (whichView === WhichView.tablet) {
      itemWidth = 253;
    } else {
      itemWidth = 288;
    }
    const newLeft = -current * itemWidth;

    document.documentElement.style.setProperty(
      `--left-offset-${id}`,
      `${newLeft}px`
    );
  };

  useEffect(() => {
    slide();
  }, [whichView, current]);

  const handleRightDisable = () => {
    if (whichView === WhichView.mobile) {
      return current === length - 1;
    } else if (whichView === WhichView.tablet && window.innerWidth <= 722) {
      return current + 1 === length - 1;
    } else if (whichView === WhichView.tablet) {
      return current + 3 === length - 1;
    } else {
      return current + 4 === length - 1;
    }
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider-models"></section>
      <div className="cards-slider__section">
        <div className="section__title">
          <h2 className="title">{title}</h2>
          <ButtonSlide
            arrow={ButtonSlideEnum.left}
            setDisable={current === 0}
            onClickFunction={() => {
              if (current === 0) return;
              return slideLeft();
            }}
          />
          <ButtonSlide
            arrow={ButtonSlideEnum.right}
            setDisable={handleRightDisable()}
            onClickFunction={() => {
              if (handleRightDisable()) return;
              return slideRight();
            }}
          />
        </div>
        <div className="section__items">
          <div className="items__board" ref={itemsBoardRef}>
            {slides.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  <div className="items__item">
                    <Card item={slide} />
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
