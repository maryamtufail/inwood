import { useQuery } from 'react-query';
import axiosInstance from '../api/axios';
import { ProductsResponse } from '../types/api';

const fetchFurniture = async (): Promise<ProductsResponse> => {
  const response = await axiosInstance.get('/products/category/furniture');
  return response.data;
};

export const useFetchFurniture = () => {
  return useQuery<ProductsResponse, Error>('furniture', fetchFurniture, {
    retry: 3, 
    retryDelay: 1000, 
  });
};
