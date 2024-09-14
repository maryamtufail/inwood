// hooks/useFetchCategory.ts
import { useQuery } from 'react-query';
import axiosInstance from '../api/axios';
import { CategoriesResponse } from '../types/api';

const fetchCategory = async (): Promise<CategoriesResponse> => {
    const response = await axiosInstance.get('/c/bae8-9d7d-49aa-b9a1');
    return response.data.categories;
};

export const useFetchCategory = () => {
    return useQuery<CategoriesResponse, Error>('category', fetchCategory, {
        retry: 3,
        retryDelay: 1000,
    });
};
