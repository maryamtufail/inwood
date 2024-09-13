// src/components/ProductSlider.tsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import ProductItem from './ProductItem';
import { Swiper as SwiperType } from 'swiper/types';
import { useFetchFurniture } from '../../hooks/useFetchFurniture';
import { getColor } from '../../api/colorUtils';

const ProductSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);



  const { data, error, isLoading } = useFetchFurniture();

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="ml-20 py-12 lg:ml-[320px] px-2">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={1}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 0.7,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.2,
          },
          1920: {
            slidesPerView: 3.5,
          },
        }}
      >
        {data?.products.map((product, index) => (
          <SwiperSlide key={product.id} className="bg-white rounded-lg py-12"        style={{ backgroundColor: getColor(index) }}>
            <ProductItem
              title={product.title}
              price={`$${product.price.toFixed(2)}`}
              brand={product.brand}
              thumbnail={product.thumbnail}
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation */}
      <div className="flex flex-row items-center justify-end p-3 space-x-4">
        <button
          className="bg-blue-100 p-3 rounded-full text-blue-500"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          className="bg-red-100 p-3 rounded-full text-red-500"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
