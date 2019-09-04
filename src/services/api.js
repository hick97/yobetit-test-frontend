import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yobetit-backend-test.herokuapp.com/api/v1',
});

export default api;
