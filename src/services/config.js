import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = sessionStorage.getItem('refresh');

    if (error?.response?.status === 401 && !originalRequest?.__isRetryRequest) {
      originalRequest.__isRetryRequest = true;

      const res = await axios.post(`${BASE_URL}/refresh-token?refreshToken=${refreshToken}`);

      const newToken = res.data.accessToken;
      const newRefresh = res.data.refreshToken;

      sessionStorage.setItem('token', newToken);
      sessionStorage.setItem('refresh', newRefresh);

      originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
