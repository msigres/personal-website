// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
  ],

  css: [
    '~/assets/css/main.css'
  ],

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256
    }
  },

  devtools: {
    enabled: true,
  }
})
