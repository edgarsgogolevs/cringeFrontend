import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const apiUrl = "<https://localhost:5000>";
  let api = axios.create({
    baseURL: apiUrl,
    headers: {
      common: {},
    },
  });
return {
    provide: {
      api: api,
    },
  };
});