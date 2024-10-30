// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['pruvious'],

  pruvious: {
    jwt: {
      secretKey: '2UclR3xeqXkUW_LOVM28lEgmiEH6bj2KSQ-Fq_u3z-UgQu8EK8FHB_tMD-E0-wFK'
    }
  }
})