// Import necessary modules from 'react-query' and the custom Axios instance
import { QueryClient } from 'react-query';
import axiosInstance from './axiosInstance';

// Create a new QueryClient instance with custom default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry failed queries once before displaying an error
      refetchOnWindowFocus: false, // Disable automatic refetching of data when the window gains focus
    },
  },
});

// Export the QueryClient instance and Axios instance for use throughout the project
export { queryClient, axiosInstance };
