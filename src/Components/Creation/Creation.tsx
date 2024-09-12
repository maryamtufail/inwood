import React, { useState, useRef } from 'react';
import LeftSection from './LeftSection';
import SliderSection from './SliderSection';
import { Swiper as SwiperClass } from 'swiper/types';

const Creation: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const navigatePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const navigateNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const progressWidth = (activeIndex / 4) * 100;

  return (
    <div className="flex flex-row items-center justify-between py-12 ">
      <LeftSection
        navigatePrev={navigatePrev}
        navigateNext={navigateNext}
        progressWidth={progressWidth}
      />

      <SliderSection
        swiperRef={swiperRef}
        setActiveIndex={setActiveIndex}
        activeIndex={0}
      />
    </div>
  );
};

export default Creation;
