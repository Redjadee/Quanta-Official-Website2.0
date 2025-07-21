export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,

  typescript: { 
    typeCheck: true,
    strict: true 
  },

  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@element-plus/nuxt',
  ],

})
