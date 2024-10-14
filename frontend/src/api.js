// src/api.js (Create a new file for API configuration)
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Your backend URL
});

export default api;
