import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { Swiper as SwiperClass } from 'swiper/types';
import { Product } from '@/types/api';
import { CreationItem } from './CreationItem';
import { getColor } from '@/api/colorUtils';

interface SliderSectionProps {
  swiperRef: React.MutableRefObject<SwiperClass | null>;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
  products: Product[];
}

const SliderSection: React.FC<SliderSectionProps> = ({
  swiperRef,
  setActiveIndex,
  activeIndex,
  products,
}) => {
  return (
    <div className="xl:w-3/4 md:w-1/2 mt-12 md:mt-0 h-[790px] xl:h-[737px] pl-4 md:pl-12 flex items-center justify-center">
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
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div
              className={`w-full  md:h-[737px] lg:h-[537px] py-2 bg-accent rounded-md transform transition-transform duration-500 ease-in-out ${
                index === activeIndex ? 'scale-100' : 'scale-95'
              }`}
              style={{ backgroundColor: getColor(index) }}
            >
              <CreationItem product={product} />

              <button className="absolute bottom-0 left-0 text-xl w-full font-semibold text-textSecondary py-4 px-6 bg-secondary hover:text-textPrimary hover:bg-transparent border-2 border-[#70908b]  rounded mr-6">
                Explore All 
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
