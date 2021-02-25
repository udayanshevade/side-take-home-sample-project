import axios, { AxiosInstance } from 'axios';

const auth = btoa("simplyrets:simplyrets");
const baseURL = 'https://api.simplyrets.com';

const simplyRetsInstance: AxiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Basic ${auth}` }
});

export default simplyRetsInstance;
