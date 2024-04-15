import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: null as string | null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
    },
    getToken() {
      return this.token;
    },
  },
});


console.log("HELLOO", useAuthStore); // Log the token value
