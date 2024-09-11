import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar,  } from 'swiper/modules';
import ProductItem from './ProductItem';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

const products = [
  {
    imageUrl: '/images/product/chair.svg',
    title: 'Armchair',
    description: 'Light single chair',
    price: '$145',
    bgColor: 'bg-[#caf3e5]',
  },
  {
    imageUrl: '/images/product/sofa.svg',
    title: 'Premium Sofa',
    description: 'Elegant and comfy',
    price: '$225',
    bgColor: 'bg-[#e0eff6]',
  },
  {
    imageUrl: '/images/product/sofa2.svg',
    title: 'Minimal Sofa',
    description: 'Light single chair',
    price: '$145',
    bgColor: 'bg-[#eeebff]',
  },
  {
    imageUrl: '/images/product/chairlast.svg',
    title: 'Dining Chair',
    description: 'Modern design',
    price: '$85',
    bgColor: 'bg-[#fff4e7]',
  },
  {
    imageUrl: '/images/image1.png',
    title: 'Armchair',
    description: 'Light single chair',
    price: '$145',
    bgColor: 'bg-[#caf3e5]',
  },
  {
    imageUrl: '/images/image2.png',
    title: 'Premium Sofa',
    description: 'Elegant and comfy',
    price: '$225',
    bgColor: 'bg-[#e0eff6]',
  },
  {
    imageUrl: '/images/image3.png',
    title: 'Minimal Sofa',
    description: 'Light single chair',
    price: '$145',
    bgColor: 'bg-[#eeebff]',
  },
  {
    imageUrl: '/images/image4.png',
    title: 'Dining Chair',
    description: 'Modern design',
    price: '$85',
    bgColor: 'bg-[#fff4e7]',
  },
];

const ProductSlider: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null); 

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

  return (
    <div className="ml-20 lg:ml-[320px] px-2">
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
        {products.map((product, index) => (
          <SwiperSlide key={index} className="bg-white rounded-lg py-12">
            <ProductItem
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
              bgColor={product.bgColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
        {/* navigation */}
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
