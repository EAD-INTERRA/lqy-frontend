import { createPinia } from '@pinia/core';

export default defineNuxtPlugin(() => {
  const pinia = createPinia();

  nuxtApp.provide('pinia', pinia);
});
