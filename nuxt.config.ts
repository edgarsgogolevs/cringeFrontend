// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss", "~/assets/styles/main.css"],
  layoutTransition: true,
  pageTransition: true,
  // modules: ["@pinia/nuxt"],
  alias: {
    "@": "/<rootDir>"
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:8081",
    },
  },
});
