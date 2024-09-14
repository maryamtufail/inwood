import { useState, useEffect } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import Description from './Description';

interface ProductDisplayProps {
  name: string;
  price: string;
  rating: number;
  description: string;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  name,
  price,
  rating,
  description,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1920) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col xl:flex-col lg:flex-row gap-6">
      {/* Placeholder Image */}
      <div className="w-full min-h-96 bg-gray-300 rounded-lg mb-4 lg:mb-0"></div>

      {/* Product Details */}
      <div className="w-full lg:w-3/5 md:w-3/5 sm:w-full">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
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
          <p className="text-xl text-gray-900 font-bold">{price}</p>
          {/* Add to Cart Button */}
          <button className="flex items-center gap-3 justify-center bg-[#70908b] text-white px-6 py-3 rounded-md my-12 hover:bg-transparent border hover:border-[#70908b] transition-all">
            Add to Cart
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Conditionally render Description based on screen size */}
        {!isLargeScreen && <Description description={description} />}
      </div>
    </div>
  );
};

export default ProductDisplay;
