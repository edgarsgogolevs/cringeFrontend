import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const apiUrl = "http://localhost:8081";
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