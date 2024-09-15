import { Product } from '@/types/api';

interface ProductItemProps {
  product: Product;
}

export const CreationItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="text-center  text-[#70908b]">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full    h-[550px]  object-fit mb-2"
      />
    </div>
  );
};
