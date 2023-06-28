import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-useless-catch
    try {
      if (error.response.data.error === "TokenExpiredError") {
        return new Promise((resolve, reject) => {
          api
            .get("/auth/refresh")
            .then((response) => {
              setAuthHeaders(response.data.token);
              return error.request.responseURL;
            })
            .then((url) => api[error.config.method](url))
            .then((response) => resolve(response))
            .catch((error) => {
              reject(error);
            });
        });
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const setAuthHeaders = (token) => {
  if (!token) delete api.defaults.headers.common["Authorization"];

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default api;
