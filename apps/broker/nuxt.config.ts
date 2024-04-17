// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";


export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/")
  },
  devtools: { enabled: true },
   modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Sen: true,
        Oxygen: true,
      },
      display: 'swap', // Recommended for performance
      prefetch: true, // Optional, improves initial loading speed
      download: true // Optional, downloads fonts on first visit
    }]
  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    // "~/assets/css/tailwind.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    setup(app) {
      // app.use(createPinia());
      app.provide('pinia', pinia);
    },
  },
})
