import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yobetit-backend-test.herokuapp.com/',
});

export default api;
