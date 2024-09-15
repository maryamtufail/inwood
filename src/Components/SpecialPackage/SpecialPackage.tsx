import { useState, useEffect } from 'react';
import ProductDisplay from './ProductDisplay';
import Description from './Description';
import Slider from './Slider';
import { useFetchFurniture } from '../../hooks/useFetchFurniture';
import { Product } from '../../types/api';

const products = [
  {
    id: 1,
    title: 'Living Room Family Set',
    price: 229.99,
    rating: 5,
    description:
      'Perfect for families, this set includes comfortable seating for everyone, featuring durable fabric and a modern design that enhances any living space. Perfect for families, this set includes comfortable seating for everyone, featuring durable fabric and a modern design that enhances any living space.',
    thumbnail:
      'https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const SpecialPackage = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);
  const [isOtherScreen, setIsOtherScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1920) {
        setIsOtherScreen(true);
      } else {
        setIsOtherScreen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { data, error, isLoading } = useFetchFurniture();

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">
        Special Package
      </h1>

      <div className="flex xl:flex-row flex-col gap-6 ">
        <div className="flex-1">
          <ProductDisplay
            title={activeProduct.title}
            rating={activeProduct.rating}
            price={activeProduct.price}
            description={activeProduct.description}
            thumbnail={activeProduct.thumbnail}
          />
        </div>

        <div className="basis-full lg:basis-2/5 ">
          {!isOtherScreen && (
            <Description description={activeProduct.description} />
          )}
          <Slider
            products={data?.products || []}
            onProductSelect={setActiveProduct}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialPackage;
