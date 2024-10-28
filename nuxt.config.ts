// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  // devtools: { enabled: true }
  runtimeConfig: {
    public: {
      apiUrl: "",
    },
    database: "",
  },

  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss", "@nuxt/eslint", "@pinia/nuxt"],
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },
  tailwindcss: {
    viewer: false,
  },
});