import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const tag = 'Api';

/**
 * Simple abstraction to handle errors
 * For now, just starting with a simple `get` that has some base-level error handling
 * Returning `null` in case of error to let the calling function know something went wrong.
 * If the caller needs to know what the error
 */
const ApiBase = {
  async get<T>(
    endpoint: string,
    axiosInstance: AxiosInstance = axios,
    config?: AxiosRequestConfig
  ): Promise<T | null> {
    try {
      return await axiosInstance.get(endpoint, config);
    } catch (err) {
      console.error(tag, `Error: [GET] ${endpoint}: ${err.message}`);
      return null;
    }
  },
};

export default ApiBase;
