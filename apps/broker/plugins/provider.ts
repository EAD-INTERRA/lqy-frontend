import { serviceProvider } from "../services/provider"
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
    const services = serviceProvider();
    return {
        provide: {
            services: {
                base: services.base,
                auth: services.auth
            }
        }
    }
})