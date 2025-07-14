export default defineNuxtPlugin(( nuxtApp ) => {
  const fetchApi = async (url: string, options: any = {}) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.apiBase
    
    if (!url.startsWith('/')) {
      url = `/${url}`
    }
    
    try {
      const response = await $fetch(url, {
        baseURL,
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      })
      
      return response
    } catch (error: any) {
      console.error(`API Error at ${url}:`, error)
      throw new Error(`API Error at ${url}: ${error.message}`)
    }
  }

  return {
    provide: {
      fetchApi
    }
  }
})