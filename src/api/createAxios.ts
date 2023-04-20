import axios, { AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://example.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = "Bearer lkdsfsjfsld"
  
    config.headers.Authorization = token
  
  return config
})

export default axiosClient;




