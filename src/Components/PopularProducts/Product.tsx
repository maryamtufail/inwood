import ProductSlider from './ProductSlider';

const Product: React.FC = () => {
  return (
    <section className="pt-24 pb-24 px-0">
      {/* Header Section */}
      <div className="flex w-full justify-center items-center">
        <span className="text-4xl font-bold text-[#07484a]">
          Popular Products
        </span>
      </div>

      <ProductSlider />

      {/* Explore Button */}
      <div className="flex w-full justify-center items-center mt-5">
        <button className="flex w-64 py-4 px-5 gap-4 justify-center items-center bg-[#70908b] rounded-lg border-none text-white">
          Explore all items
        </button>
      </div>
    </section>
  );
};

export default Product;
