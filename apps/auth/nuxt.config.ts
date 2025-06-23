// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { config } from "dotenv";
import { resolve } from "path";
import { createPinia } from "pinia"; // ✅ Proper import for Pinia

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Sen: true,
          Oxygen: true,
        },
        display: "swap", // Recommended for performance
        prefetch: true, // Optional, improves initial loading speed
        download: true, // Optional, downloads fonts on first visit
      },
    ],
  ],
  css: [
      '~/assets/css/tailwind.css',
      '~/assets/css/main.css',
    ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
          admin: process.env.admin,
          Broker: process.env.Broker,
          CSCS: process.env.CSCS,
          Custodian: process.env.Custodian,
          Investor: process.env.Investor,
          Financial_Institutions: process.env.Financial_Institutions,
          auth: process.env.auth
        }
  },
  plugins: ["~/plugins/piniaPlugin.ts"],
  app: {
    setup(app) {
      app.use(createPinia()); 
    },
  },
})