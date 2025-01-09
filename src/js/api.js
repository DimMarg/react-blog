import axios from 'axios';

// Create an Axios instance with predefined configuration
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Base URL for jsonplaceholder API
});

export default api;