declare module '#app' {
  interface NuxtApp {
    $fetchApi: (url: string, options?: any) => Promise<any>
  }
}