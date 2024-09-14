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
      'Perfect for families, this set includes comfortable seating for everyone, featuring durable fabric and a modern design that enhances any living space.',
  },
  {
    id: 2,
    name: 'Living Room Special Set',
    price: '$329.99',
    rating: 4,
    description:
      'Upgrade your living room with this special set that combines style and comfort. The plush cushions and sleek lines will elevate your home decor.',
  },
  {
    id: 3,
    name: 'Living Room Luxury Set',
    price: '$587.99',
    rating: 4,
    description:
      'Experience ultimate luxury with this premium set, crafted with high-quality materials and designed for sophisticated living spaces. Perfect for hosting guests.',
  },
  {
    id: 4,
    name: 'Living Room Comfort Set',
    price: '$459.99',
    rating: 5,
    description:
      'A perfect blend of comfort and style, this set is ideal for relaxation. The deep cushions and soft fabric create a cozy atmosphere in any home.',
  },
  {
    id: 5,
    name: 'Living Room Modern Set',
    price: '$299.99',
    rating: 4,
    description:
      'Embrace modern living with this stylish set. With clean lines and a minimalist design, it brings a fresh, contemporary look to your living room.',
  },
  {
    id: 6,
    name: 'Living Room Classic Set',
    price: '$389.99',
    rating: 4,
    description:
      'A timeless design that never goes out of style, this classic living room set features elegant details and high-quality craftsmanship for a luxurious feel.',
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
            description={activeProduct.description}
          />
        </div>

        {/* Description and Slider */}

        <div className="basis-full lg:basis-2/5 ">
          {!isOtherScreen && <Description   description={activeProduct.description}/>}
          <Slider products={products} onProductSelect={setActiveProduct}/>
        </div>
      </div>
    </section>
  );
};

export default SpecialPackage;
