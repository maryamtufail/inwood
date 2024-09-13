import { useQuery } from 'react-query';
import axiosInstance from '../api/axios';
import { TestimonialsResponse } from '../types/api';

const fetchTestimonial = async (): Promise<TestimonialsResponse> => {
  const response = await axiosInstance.get('/c/9411-138b-4fcc-aa05');
  return response.data;
};

export const useFetchTestimonial = () => {
  return useQuery<TestimonialsResponse, Error>('testimonial', fetchTestimonial, {
    retry: 3, 
    retryDelay: 1000, 
  });
};

