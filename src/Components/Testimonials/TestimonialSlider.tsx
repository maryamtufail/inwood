import { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { useFetchTestimonial } from '@/hooks/useFetchTestimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {
  ArrowNarrowLeftIcon,
  ArrowRightIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid';

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
      <div className="absolute hidden inset-y-0 right-4 z-10 xl:flex flex-col items-center justify-center space-y-4">
        <button
          className="bg-blue-100 p-3 rounded-full text-blue-500"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowNarrowLeftIcon className="w-6 h-6 inline-block" />
        </button>
        <button
          className="bg-red-100 p-3 rounded-full text-red-500"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowNarrowRightIcon className="w-6 h-6 inline-block" />
        </button>
      </div>
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
