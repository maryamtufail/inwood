interface ProductItemProps {
  title: string;
  brand: string;
  price: string;
  thumbnail: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  thumbnail,
  title,
  brand,
  price,
}) => {
  return (
    <div className={`p-6 rounded-lg py-12`}>
      {/* Image Section */}
      <div className="flex justify-center items-center w-full mb-12">
        <div
          className="h-[260px] w-full bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start w-full text-[#70908b] ">
        <span className="text-2xl font-bold ">{title}</span>
        <p className="text-lg font-normal mt-7">{brand}</p>
        <span className="text-2xl font-bold  mt-7">{price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
