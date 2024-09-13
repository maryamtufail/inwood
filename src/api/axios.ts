import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', 
  headers: {
    'Content-Type': 'application/json',
  
  },
  timeout: 5000,
});

export default axiosInstance;
