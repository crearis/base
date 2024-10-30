// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-30',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'pruvious'],
  googleFonts: {
    families: {
      Lato: {
        wght: [400, 700],
        ital: [400, 700],
      },
      Poppins: [500],
    },
  },
})
