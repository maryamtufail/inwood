import React, { useRef, useEffect, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Product } from '../../types/api';

interface SliderProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const Slider: React.FC<SliderProps> = ({ products, onProductSelect }) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  useEffect(() => {
    onProductSelect(products[activeIndex]);
  }, [activeIndex, products, onProductSelect]);

  return (
    <div className="relative pl-12 mt-8 special">
      <Swiper
        ref={swiperRef}
        loop={true}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        spaceBetween={20}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper-container"
        breakpoints={{
          320: {
            slidesPerView: 1,
            direction: 'horizontal',
          },
          768: {
            slidesPerView: 0.5,
            direction: 'horizontal',
          },
          1024: {
            slidesPerView: 1.6,
            direction: 'horizontal',
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
            className={`flex ${product.id === products[activeIndex].id ? 'swiper-slide-active w-[680px]' : ' w-[620px]'}`}
          >
            <div
              className="h-[149px] w-[248px] bg-gray-300 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${product.thumbnail})` }}
            ></div>
            <div
              className={`flex-grow flex items-center justify-between p-4 ml-2 ${product.id === products[activeIndex].id ? 'border rounded-l-lg bg-[#e0f6f1]' : ''}`}
            >
              <div className="flex flex-col w-full justify-center">
                <div className="flex flex-col lg:flex-row w-full justify-between">
                  <h4 className="text-md md:text-lg font-semibold text-gray-800">
                    {product.title}
                  </h4>
                  <h3 className="text-md md:text-xl font-bold text-gray-800">
                    ${product.price.toFixed(2)}
                  </h3>
                </div>
                <div className="text-yellow-500 flex my-2">
                  {Array.from({ length: Math.round(product.rating || 0) }).map(
                    (_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 .587l3.668 7.57L24 9.748l-6 5.858 1.415 8.258L12 18.896l-7.415 4.968L6 15.606l-6-5.858 8.332-1.591L12 .587z" />
                      </svg>
                    )
                  )}
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
