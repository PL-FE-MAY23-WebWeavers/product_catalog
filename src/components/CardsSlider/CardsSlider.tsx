import React, { useEffect, useRef, useState } from 'react';
import './cardsSlider.scss';
import { Phone } from '../../types/Phones';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import { Card } from '../Card/Card';

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
  const itemsBoardRef = useRef<HTMLDivElement | null>(null);

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

  const slideLeft = () => {
    const itemWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-width'), 10);
    const itemsBoard = itemsBoardRef.current;

    setCurrent(current <= 0 ? 0 : current - 1);
    console.log(current);

    if (itemsBoard) {
      const currentLeft = parseInt(getComputedStyle(itemsBoard).left, 10);
      const newLeft = currentLeft + itemWidth;
      document.documentElement.style.setProperty('--left-offset', `${newLeft}px`);
    }
  };

  const slideRight = () => {
    const itemWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--item-width'), 10);
    const itemsBoard = itemsBoardRef.current;

    setCurrent(current === slides.length - 1 ? length - 1 : current + 1);

    if (itemsBoard) {
      const currentLeft = parseInt(getComputedStyle(itemsBoard).left, 10);
      const newLeft = currentLeft - itemWidth;
      document.documentElement.style.setProperty('--left-offset', `${newLeft}px`);
    }
  };

  useEffect(() => {
    console.log(`Item Width: ${setWidthByView()}`);

    document.documentElement.style.setProperty('--item-width', `${setWidthByView()}px`);
  }, [whichView]);

  const setWidthByView = () => {
    const itemWidthM = 228;
    const itemWidthT = 253;
    const itemWidthD = 288;

    let itemWidth;

    if (whichView === WhichView.mobile) {
      itemWidth = itemWidthM;
    } else if (whichView === WhichView.tablet) {
      itemWidth = itemWidthT;
    } else {
      itemWidth = itemWidthD;
    }

    return itemWidth;
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
          onClickFunction={() => {
            if (current === 0) return;
            return slideLeft();
          }
          }
        />
        <ButtonSlide
          arrow={ButtonSlideEnum.right}
          setDisable={current === length - 1}
          onClickFunction={() => {
            if (current === length - 1) return;
            return slideRight();
          }
          }
        />
      </div>
      <div className='section__items'>
        <div className='items__board' ref={itemsBoardRef}>

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
