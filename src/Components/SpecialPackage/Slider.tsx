import React, { useRef, useEffect, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
}

interface SliderProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const Slider: React.FC<SliderProps> = ({ products, onProductSelect }) => {
  const swiperRef = useRef<any>(null); // Reference to Swiper instance
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle previous slide
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      setActiveIndex(swiperRef.current.swiper.realIndex); // Use realIndex for loop handling
    }
  };

  // Handle next slide
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      setActiveIndex(swiperRef.current.swiper.realIndex); // Use realIndex for loop handling
    }
  };

  // Update selected product
  useEffect(() => {
    onProductSelect(products[activeIndex]);
  }, [activeIndex, products, onProductSelect]);

  // Update Swiper direction on resize
  useEffect(() => {
    const updateSwiperDirection = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.params.direction = window.innerWidth >= 1920 ? 'vertical' : 'horizontal';
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener('resize', updateSwiperDirection);
    updateSwiperDirection(); // Call on mount to set initial direction

    return () => {
      window.removeEventListener('resize', updateSwiperDirection);
    };
  }, [products.length, activeIndex]);

  return (
    <div className="relative mt-8 special">
      <Swiper
        ref={swiperRef}
        loop={true} // Enable loop
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use realIndex
        className="swiper-container"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 0.5,
          },
          1024: {
            slidesPerView: 1.6,
          },
          1920: {
            slidesPerView: 3,
            direction: 'vertical',
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className={`flex ${product.id === products[activeIndex].id ? 'swiper-slide-active w-[720px]' : ''}`}
          >
            <div className="h-[149px] w-[248px] bg-gray-300 rounded-lg" />
            <div className={`flex-grow flex items-center justify-between p-4 ${product.id === products[activeIndex].id ? 'border rounded-lg bg-[#e0f6f1]' : ''}`}>
              <div>
                <div className="flex justify-between">
                  <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                  <h3 className="text-xl font-bold text-gray-800">{product.price}</h3>
                </div>
                <div className="text-yellow-500 flex my-2">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .587l3.668 7.57L24 9.748l-6 5.858 1.415 8.258L12 18.896l-7.415 4.968L6 15.606l-6-5.858 8.332-1.591L12 .587z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="z-10 absolute right-0 bottom-0 xl:flex xl:flex-col hidden space-y-3">
        <button
          className="bg-blue-100 size-12 rounded-full text-blue-500 flex items-center justify-center"
          onClick={handlePrev}
        >
          <ArrowUpIcon className="h-5 w-5 inline-block" />
        </button>
        <button
          className="bg-red-100 size-12 rounded-full text-red-500 flex items-center justify-center"
          onClick={handleNext}
        >
          <ArrowDownIcon className="h-5 w-5 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
