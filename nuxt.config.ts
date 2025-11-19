import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'grahamsh.com',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "I'm a student and developer working on open source technology and maintenance." },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/gsh.svg' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      ],
    }
  },

  modules: ['motion-v/nuxt', '@nuxt/image', '@nuxtjs/plausible', '@nuxt/fonts'],

  vite: {
    plugins: [tailwindcss()],
  },
  plausible: {
    // Prevent tracking on localhost
    apiHost: 'https://possible.grahamsh.com',
    ignoredHostnames: ['localhost'],
    autoOutboundTracking: true
  },

})