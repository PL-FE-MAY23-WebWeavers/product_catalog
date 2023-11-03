import React, { useEffect, useRef, useState } from 'react';
import './slider.scss';
import { ButtonSlide } from '../utils/ButtonSlide/ButtonSlide';
import { ButtonSlideEnum } from '../../types/ButtonSlideEnum';
import cn from 'classnames';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    'https://webweavers.onrender.com/img/banner-phones.png',
    'https://webweavers.onrender.com/img/banner-tablets.png',
    'https://webweavers.onrender.com/img/banner-accessories.png'
  ];

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 639);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 639);
    };

    window.addEventListener('resize', handleResize);

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping || startX === null || !containerRef.current) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    let newSlide = Math.round(deltaX / containerRef.current.clientWidth);

    if (newSlide < 0) {
      newSlide = 0;
    }

    if (newSlide > 2) {
      newSlide = 2;
    }

    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  const handleLeftArrow = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => {return (prev - 1);});
  };

  const handleRightArrow = () => {
    if (currentSlide === 2) return;
    setCurrentSlide((prev) => {return (prev + 1);});
  };

  return (
    <>
      <div className='slider'>
        {!isMobileView && <ButtonSlide
          arrow={ButtonSlideEnum.left}
          setDisable={currentSlide === 0}
          onClickFunction={handleLeftArrow}
        />}

        <div
          className="swipeable-container"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="swipeable-content">
            {images.map((src, index) => (
              <img
                key={index}
                className={cn('swipeable-item', {
                  'hidden': currentSlide !== index,
                })}
                src={src}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {!isMobileView && <ButtonSlide
          arrow={ButtonSlideEnum.right}
          setDisable={currentSlide === 2}
          onClickFunction={handleRightArrow}
        />}
      </div>
      <div className="pagination-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={cn('dot', {
              'dot__active': currentSlide === index,
            })}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </>
  );
};
