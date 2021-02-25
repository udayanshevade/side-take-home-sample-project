import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

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
      const { data } = await axiosInstance.get(endpoint, config);
      return data;
    } catch (err) {
      return null;
    }
  },
};

export default ApiBase;
