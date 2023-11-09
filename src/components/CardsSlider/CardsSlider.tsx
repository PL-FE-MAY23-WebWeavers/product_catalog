import React, { useEffect, useRef, useState } from 'react';
import './cardsSlider.scss';
import { Phone } from '../../types/Phones';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import { Card } from '../Card/Card';

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
  const slides = [1, 2, 3, 4, 5, 6].map((m) => {
    return {
      ...items[0],
      id: m,
    };
  });
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
    // const itemWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-width'), 10);
    // const itemsBoard = itemsBoardRef.current;

    setCurrent((prev) => (prev <= 0 ? 0 : prev - 1));

    // if (itemsBoard) {
    //   const currentLeft = parseInt(getComputedStyle(itemsBoard).left, 10);
    //   const newLeft = -current * itemWidth;
    //   document.documentElement.style.setProperty('--left-offset', `${newLeft}px`);
    // }
  };

  const slideRight = () => {
    // const itemWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-width'), 10);

    // const itemsBoard = itemsBoardRef.current;

    setCurrent((prev) => (prev === slides.length - 1 ? length - 1 : prev + 1));

    // if (itemsBoard) {
    //   const currentLeft = parseInt(getComputedStyle(itemsBoard).left, 10);
    //   const newLeft = -current * itemWidth;
    //   document.documentElement.style.setProperty('--left-offset', `${newLeft}px`);
    // }
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

    document.documentElement.style.setProperty('--left-offset', `${newLeft}px`);
  };

  useEffect(() => {
    slide();
  }, [whichView, current]);

  const handleRightDisable = () => {
    if (whichView === WhichView.mobile) {
      return current === length;
    } else if (whichView === WhichView.tablet && window.innerWidth <= 722) {
      return current + 1 === length;
    } else if (whichView === WhichView.tablet && window.innerWidth > 722) {
      return current + 1 === length;
    } else {
      return current + 4 === length;
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
