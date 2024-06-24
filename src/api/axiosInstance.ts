// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://example.com/user', // Replace with your API base URL
  timeout: 10000, // Timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
