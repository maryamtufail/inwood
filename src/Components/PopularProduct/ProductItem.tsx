interface ProductItemProps {
  title: string;
  price: string;
  thumbnail: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  thumbnail,
  title,
  price,
}) => {
  return (
    <div className={`p-6 rounded-lg py-12`}>
      <div className="flex justify-center items-center w-full mb-12">
        <div
          className="h-[260px] w-full bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
      </div>

      <div className="flex flex-col items-start w-full text-secondary ">
        <span className="text-2xl font-bold ">{title}</span>
        <span className="text-2xl font-bold  mt-7">{price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
