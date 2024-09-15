import ProductSlider from './ProductSlider';

const Product: React.FC = () => {
  return (
    <section id="product" className="pt-24 pb-24 px-0 relative">
      <img
        src="/images/product/container.svg"
        alt="Decorative SVG"
        className="absolute left-0 transform -translate-x-1/2"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />
      <div className="flex w-full justify-center items-center">
        <span className="text-5xl font-bold text-[#07484a]">
          Popular Products
        </span>
      </div>
      <ProductSlider />
      <div className="flex w-full justify-center items-center mt-5">
        <button className="flex w-64 py-4 px-5 gap-4 justify-center items-center bg-[#70908b] rounded-lg border-none text-white">
          Explore all items
        </button>
      </div>
    </section>
  );
};

export default Product;
