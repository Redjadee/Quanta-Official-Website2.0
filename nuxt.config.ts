export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  typescript: { //类型检查
    typeCheck: true,
    strict: true //严格模式
  },

  modules: [
    '@nuxtjs/seo',
  ],

  runtimeConfig: {
    public: {
      apiBase: 'http://home.linwine.space:7100/api'
    }
  }
})
