import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';

interface State {
  authToken: string | null;
  isLoggedIn: boolean;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): State => ({
    authToken: null,
    isLoggedIn: false,
  }),
  actions: {
    // init() {
    //   const token = getWithExpiry('authToken');
    //   if (token) {
    //     this.authToken = token;
    //     this.isLoggedIn = true;
    //     console.log("YELLO",this.authToken)
    //   }
    // },
    login() {
      const route = useRoute();
      const token = route.query.token;
      const expiresIn = 3600;
      
      const getToken = localStorage.getItem('authToken');
      if (!getToken && token != null || token == "undefined") {
        setWithExpiry('authToken', token, expiresIn * 1000);
        this.authToken = token;
        this.isLoggedIn = true;
        return true;
      }
      else{
        this.checkAuth();
      }
      
    },
    logout() {
      localStorage.removeItem('authToken');
      this.authToken = null;
      this.isLoggedIn = false;
      window.location.reload();
    },
    checkAuth() {
      const token = getWithExpiry('authToken');
      console.log("HNMMM", token);
      if (!token) {
        window.location.href = 'http://localhost:3001';
        return false;
      }
      else{
        return true;
      }
    },
  },
  mutations: {
    SET_AUTH_TOKEN(state, token: string) {
      state.authToken = token;
      state.isLoggedIn = Boolean(token);
    },
  },
  getters: {
    isAuthenticated(state): boolean {
      return Boolean(state.authToken);
    },
  },
});

export function setWithExpiry(key: string, value: string, ttl: number): void {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));

  setTimeout(() => {
    localStorage.removeItem(key);
  }, ttl);
}

export function getWithExpiry(key: string): string | null {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}
