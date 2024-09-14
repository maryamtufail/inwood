import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { useFetchTestimonial } from '../../hooks/useFetchTestimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { ArrowRightIcon } from '@heroicons/react/solid';

const TestimonialSlider: React.FC = () => {
    const { data, error, isLoading } = useFetchTestimonial();
  const swiperRef = useRef<any>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="relative max-w-[80%] mx-auto">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
        className="testimonials"
      >
        {data?.testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute hidden inset-y-0 right-4 z-10 xl:flex flex-col items-center justify-center space-y-4">
        <button
          className="bg-blue-100 p-3 rounded-full text-blue-500"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
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
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
       {/* all reviews link */}
   
          <a
            href="#"
            className="flex items-center justify-center text-lg hover:underline mt-2"
          >
            See all reviews <ArrowRightIcon className="h-5 w-5 ml-2" />
          </a>
       
    </div>
  );
};

export default TestimonialSlider;
