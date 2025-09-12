import { serviceProvider } from "../services/provider";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  // You may want to get token from runtimeConfig or auth store
  const token = undefined; // Replace with actual token logic
  return {
    provide: {
      services: serviceProvider(token)
    }
  }
});
