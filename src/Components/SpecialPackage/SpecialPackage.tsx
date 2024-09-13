import { useState, useEffect } from 'react';
import ProductDisplay from './ProductDisplay';
import Description from './Description';
import Slider from './Slider';

const products = [
  {
    id: 1,
    name: 'Living Room Family Set',
    price: '$229.99',
    rating: 5,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, minima?',
  },
  {
    id: 2,
    name: 'Living Room Special Set',
    price: '$329.99',
    rating: 4,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, minima?',
  },
  {
    id: 3,
    name: 'Living Room Luxury Set',
    price: '$587.99',
    rating: 4,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, minima?',
  },
  {
    id: 4,
    name: 'Living Room Luxury Set',
    price: '$587.99',
    rating: 4,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, minima?',
  },

  {
    id: 5,
    name: 'Living Room Luxury Set',
    price: '$587.99',
    rating: 4,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, minima?',
  },

  {
    id: 6,
    name: 'Living Room Luxury Set',
    price: '$587.99',
    rating: 4,
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, minima?',
  },
];

const SpecialPackage = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  const [isOtherScreen, setIsOtherScreen] = useState<boolean>(true);
  // Check screen size and set state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1920) {
        setIsOtherScreen(true);
      } else {
        setIsOtherScreen(false);
      }
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="mx-auto px-4 py-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
        Special Package
      </h1>

      <div className="flex xl:flex-row flex-col gap-6 ">
        <div className="flex-1">
          <ProductDisplay
            name={activeProduct.name}
            rating={activeProduct.rating}
            price={activeProduct.price}
          />
        </div>

        {/* Description and Slider */}

        <div className="basis-full lg:basis-2/5 ">
          {!isOtherScreen && <Description />}
          <Slider products={products} onProductSelect={setActiveProduct} />
        </div>
      </div>
    </section>
  );
};

export default SpecialPackage;
