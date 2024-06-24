// src/api/axiosInstance.ts
import axios from 'axios';

// Create a new Axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: 'https://example.com/user', // Base URL for all requests, replace with your API base URL
  timeout: 10000, // Timeout of 10 seconds
  headers: {
    'Content-Type': 'application/json', // Default headers for all requests (JSON format)
  },
});

export default axiosInstance;
