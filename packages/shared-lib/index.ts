import { createStore } from 'vuex';

interface State {
  authToken: string | null;
  isLoggedIn: boolean;
}

export const store = createStore<State>({
  state: {
    authToken: null,
    isLoggedIn: false,
  },
  mutations: {
    SET_AUTH_TOKEN(state, token: string) {
      state.authToken = token;
      state.isLoggedIn = Boolean(token);
    },
  },
  actions: {
    login({ commit }, { token, expiresIn }: { token: string; expiresIn: number }) {
      setWithExpiry('authToken', token, expiresIn * 1000); // expiresIn is in seconds
      commit('SET_AUTH_TOKEN', token);
    },
    logout({ commit }) {
      localStorage.removeItem('authToken');
      commit('SET_AUTH_TOKEN', null);
    },
    checkAuth({ commit }) {
      const token = getWithExpiry('authToken');
      if (!token) {
        window.location.href = 'https://your-auth-app-url/login';
      }
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

