import { serviceProvider } from "../../auth/services/provider"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            services: serviceProvider()
        }
    }
})