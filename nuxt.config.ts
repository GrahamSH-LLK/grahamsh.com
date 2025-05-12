import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
   css: ['~/assets/main.css'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'grahamsh.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
  },

  modules: ['motion-v/nuxt'],

  vite: {
    plugins: [tailwindcss()],
  },
})
