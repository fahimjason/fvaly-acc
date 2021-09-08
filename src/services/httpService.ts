import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return {
    ...config,
    headers: {
      Authorization: JSON.parse(
        JSON.parse(localStorage.getItem('persist:root') || '').auth
      )?.data?.token,
    },
  };
});

const resBody = (res: AxiosResponse) => res.data.data;

// const get = (url: string) => instance.get(url).then(resBody);
// const post = (url: string, body: {}) => instance.post(url, body).then(resBody);
// const patch = (url: string, body: {}) => instance.patch(url, body).then(resBody);
// const _delete = (url: string) => instance.patch(url).then(resBody);

const requests = {
  get: (url: string) => instance.get(url).then(resBody),
  post: (url: string, body: {}) => instance.post(url, body).then(resBody),
  patch: (url: string, body: {}) => instance.patch(url, body).then(resBody),
  delete: (url: string) => instance.patch(url).then(resBody),
};

export default requests;
