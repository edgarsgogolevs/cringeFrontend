// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss", "~/assets/styles/main.css"],
  
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:5000'
    }
  }
})
