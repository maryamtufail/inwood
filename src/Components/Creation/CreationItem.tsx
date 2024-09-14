import React from 'react';
import { Product } from '../../types/api';

interface ProductItemProps {
  product: Product;
}

export const CreationItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="text-center  text-[#70908b]">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-[500px] object-cover mb-2"
      />
      <div className="flex justify-around">
       
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p className="text-2xl font-semibold mb-16">${product.price}</p>
      </div>
    </div>
  );
};
