import { serviceProvider } from "../services/provider"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            services: serviceProvider()
        }
    }
})