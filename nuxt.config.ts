export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  typescript: { //类型检查
    typeCheck: true,
    strict: true //严格模式
  },

  modules: [ //引入的组件
    '@nuxtjs/seo',
    '@pinia/nuxt'
  ],

  runtimeConfig: {
    public: {
      apiBase: 'http://home.linwine.space:7100/api'
    }
  }
})
