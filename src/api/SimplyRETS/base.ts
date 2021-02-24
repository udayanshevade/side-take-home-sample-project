import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://api.simplyrets.com';

const simplyRetsInstance: AxiosInstance = axios.create({
  baseURL,
});

export default simplyRetsInstance;
