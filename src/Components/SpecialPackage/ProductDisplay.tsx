import { useState, useEffect } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Description from './Description';

interface ProductDisplayProps {
  title: string;
  price: number;
  rating: number;
  description: string;
  thumbnail: string;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  title,
  price,
  rating,
  description,
  thumbnail, // Include thumbnail prop
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1920);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col xl:flex-col lg:flex-row gap-6">
      {/* Image Container */}
      <div
        className="w-full h-[350px] bg-gray-300 rounded-lg mb-4 lg:mb-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>

      {/* Product Details */}
      <div className="">
        <div className="mb-5">
          <div className="flex flex-row justify-between w-full">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            {/* Add to Cart Button */}
            <button className="flex items-center gap-3 justify-center bg-[#70908b] text-white px-6 py-3 rounded-md hover:bg-transparent border hover:border-[#70908b] transition-all">
              Add to Cart
              <ShoppingCartIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="text-yellow-500 flex my-2">
            {Array(rating)
              .fill('')
              .map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.57L24 9.748l-6 5.858 1.415 8.258L12 18.896l-7.415 4.968L6 15.606l-6-5.858 8.332-1.591L12 .587z" />
                </svg>
              ))}
          </div>
          <p className="text-xl text-gray-900 font-bold">${price.toFixed(2)}</p>
        </div>

        {/* Conditionally render Description based on screen size */}
        {!isLargeScreen && <Description description={description} />}
      </div>
    </div>
  );
};

export default ProductDisplay;
