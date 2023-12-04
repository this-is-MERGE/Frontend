import axios, { AxiosError } from "axios";

// export const authAPI = axios.create({
//   baseURL: "http://127.0.0.1:8080/auth?",
// });

export const api = axios.create({
  baseURL: "http://127.0.0.1:8080/",
});

// authAPI.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error: unknown) {
//     if (error instanceof AxiosError) {
//       const { response } = error;

//       if (response != null) {
//         alert(response.data.message);
//       }
//     }
//     return await Promise.reject(error);
//   }
// );

api.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  async function (error) {
    return await Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error: unknown) {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response != null) {
        alert(response.data.message);
        switch (response.status) {
          case 401:
            alert(response.statusText);
            window.location.href = "/Login";
            break;
          default:
            return await Promise.reject(error);
        }
      }
    }
    return await Promise.reject(error);
  }
);
