import React, { useState, useRef } from 'react';
import LeftSection from './LeftSection';
import SliderSection from './SliderSection';
import { Swiper as SwiperClass } from 'swiper/types';
import { useFetchFurniture } from '../../hooks/useFetchFurniture';

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
  const { data, error, isLoading } = useFetchFurniture();

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-row items-center justify-between py-24">
      <LeftSection
        navigatePrev={navigatePrev}
        navigateNext={navigateNext}
        progressWidth={progressWidth}
      />

      <SliderSection
        swiperRef={swiperRef}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        products={data?.products || []}
      />
    </div>
  );
};

export default Creation;
