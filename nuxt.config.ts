// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  modules: [
    '@nuxtjs/supabase',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }]
  ],
  imports:{
    dirs: ['store']
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/about', '/contact', '/products'],
    }
  },
  css: ['~/assets/style/app.scss'],
  vite:{
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/modules/_variables.scss" as *;'
        }
      }
    }
  },
})
