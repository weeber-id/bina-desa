import Axios, { AxiosRequestConfig } from 'axios';

type UseQueryMethod = 'get' | 'post' | 'put' | 'delete' | 'formdata';

export const fetchRequest = async (
  method: UseQueryMethod,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  let isLoading = true;
  let error;
  let res;

  try {
    if (method === 'get') {
      const response = await Axios.get(url);
      res = response;
      isLoading = false;
    }

    if (method === 'post') {
      const response = await Axios.post(url, data, config);
      res = response;
      isLoading = false;
    }

    if (method === 'delete') {
      const response = await Axios.delete(url, config);
      res = response;
      isLoading = false;
    }

    if (method === 'put') {
      const response = await Axios.put(url, data, config);
      res = response;
      isLoading = false;
    }

    if (method === 'formdata') {
      const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: config?.headers,
      });
      res = await response.json();
      isLoading = false;
    }
  } catch (err) {
    error = err;
    isLoading = false;
  }

  return { isLoading, error, res };
};
