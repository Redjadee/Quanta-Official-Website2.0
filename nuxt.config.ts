export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true, //SSG的前提

  typescript: { 
    typeCheck: true,
  },

  modules: [
    '@nuxtjs/seo', 
    '@nuxtjs/sitemap', //解决pnpm install报错，重复下载的依赖
    '@pinia/nuxt', 
    '@element-plus/nuxt', 
  ],

  css: [
    '@/assets/style/global.css' //全局样式
  ],

  vite: {
    optimizeDeps: {
      include: ['swiper'], // 防止 Vite 优化时排除 Swiper
    },
  },
})