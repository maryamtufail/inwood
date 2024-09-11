interface ProductItemProps {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    bgColor: string;
  }
  
  const ProductItem: React.FC<ProductItemProps> = ({
    imageUrl,
    title,
    description,
    price,
    bgColor,
  }) => {
    return (
      <div className={`p-6 ${bgColor} rounded-lg py-12`}>
        {/* Image Section */}
        <div className="flex justify-center items-center w-full mb-12">
          <div
            className="h-[250px] w-48 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
  
        {/* Content Section */}
        <div className="flex flex-col items-start w-full">
          <span className="text-2xl font-bold text-[#70908b]">{title}</span>
          <p className="text-lg font-normal text-[#70908b] mt-7">{description}</p>
          <span className="text-2xl font-bold text-black mt-7">{price}</span>
        </div>
      </div>
    );
  };
  
  export default ProductItem;
  