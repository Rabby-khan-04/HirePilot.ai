import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const publicClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
  failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve()));
  failedQueue = [];
};

authClient.interceptors.request.use((config) => config);

authClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest) return Promise.reject(error);
    if (error.response?.status === 403) return Promise.reject(error);

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => authClient(originalRequest));
      }

      isRefreshing = true;
      originalRequest._retry = true;

      try {
        await publicClient.post(
          "/users/user/refresh-token",
          {},
          { withCredentials: true },
        );
        processQueue(null);
        return authClient(originalRequest);
      } catch (err) {
        processQueue(err);
        if (typeof window !== "undefined") window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
