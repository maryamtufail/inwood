import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { Swiper as SwiperClass } from 'swiper/types';

interface SliderSectionProps {
    swiperRef: React.MutableRefObject<SwiperClass | null>;
  setActiveIndex: (index: number) => void;
  activeIndex: number; 
}

const SliderSection: React.FC<SliderSectionProps> = ({
  swiperRef,
  setActiveIndex,
  activeIndex,
}) => {
  return (
    <div className="w-1/2 md:w-2/3 mt-6 md:mt-0 h-[520px] pl-4 md:pl-12">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 0.5, 
          },
          768: {
            slidesPerView: 0.5, 
          },
          1024: {
            slidesPerView: 1.6, 
          },
          1920: {
            slidesPerView: 3.5,
          },
        }}
        className="w-full"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col justify-end w-full h-[530px] p-4 bg-gray-100 rounded-md transform transition-transform duration-500 ease-in-out ${
                index === activeIndex ? 'scale-100' : 'scale-90'
              }`}
            >
              {index === 0 && (
                <button className="border-2 border-white mb-7 bg-white text-black mx-auto w-[190px] px-2 py-3 rounded-md hover:bg-transparent">
                  Explore All Rooms
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default  SliderSection;
