import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { Swiper as SwiperClass } from 'swiper/types';
import { Product } from '../../types/api';
import { CreationItem } from './CreationItem';
import { getColor } from '../../api/colorUtils';

interface SliderSectionProps {
  swiperRef: React.MutableRefObject<SwiperClass | null>;
  setActiveIndex: (index: number) => void;
  activeIndex: number;
  products: Product[]; // Accepting products as a prop
}

const SliderSection: React.FC<SliderSectionProps> = ({
  swiperRef,
  setActiveIndex,
  activeIndex,
  products, // Use the correct prop name
}) => {
  return (
    <div className="w-1/2 md:w-2/3 mt-12 md:mt-0 h-[560px] pl-4 md:pl-12">
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
          <SwiperSlide
            key={product.id}
          
          >
            <div
              className={`flex flex-col justify-end w-full h-[560px] p-4 bg-gray-100 rounded-md transform transition-transform duration-500 ease-in-out ${
                index === activeIndex ? 'scale-95' : 'scale-90'
              }`}
              style={{ backgroundColor: getColor(index) }}
            >
              <CreationItem product={product} />
              {/* Display the product here */}
              <button className="absolute bottom-0 left-0 text-xl w-full font-semibold text-[#ffffff] py-4 px-6 bg-[#70908b] hover:text-[#07484a] hover:bg-transparent border-2 border-[#70908b]  rounded mr-6">
                Explore All Bed
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
