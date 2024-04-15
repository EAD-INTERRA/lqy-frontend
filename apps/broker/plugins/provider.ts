import { pinia } from '~/plugins/piniaPlugin';
import { serviceProvider } from "../services/provider";
import { useAuthStore } from 'stores/authStore';
import { StatusCode } from "~/helpers/statusCodes";

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore(pinia);

    const initialToken = authStore.getToken();
    console.log("Initial token:", authStore.getToken());


    const services = serviceProvider(initialToken || '');
    services.base.client.interceptors.response.use(
        (response) => {
            if (response.data.access_token) {
                authStore.setToken(response.data.access_token);
            }
            return response;
        },
        (error) => {
            if (error.response && error.response.status === StatusCode.UNAUTHORIZED) {
                authStore.clearToken();
            }
            return Promise.reject(error);
        }
    );

    return {
        provide: {
            pinia,
            services,
            authStore,
        },
    };
});
