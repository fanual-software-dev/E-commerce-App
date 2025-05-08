import axios from "axios";

// export const baseAPI = axios.create({
//     baseURL: "https://dotecommersebackend.onrender.com",
//     // timeout: 1000,
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
// });



// Create a new instance of axios
export const baseAPI = axios.create({
    baseURL: "https://dotbackendcode-latst.onrender.com",
    // timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },

    withCredentials: true,
});

baseAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      try {
        error.config.__isRetryRequest = true;

        await baseAPI.post('/api/auth/refresh-token');

        return baseAPI(error.config);
      } catch (refreshError) {
        console.error(
          'Refresh token expired or invalid. Redirecting to login...'
        );
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
