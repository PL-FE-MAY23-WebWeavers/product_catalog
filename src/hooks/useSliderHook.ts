import React, { useEffect, useState } from 'react';

type useSliderHookProps = {
images: string[],
}

export const useSliderHook = ({ images }: useSliderHookProps ) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 639);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 639);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return {
    isMobileView,
  };
};
