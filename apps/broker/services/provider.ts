import axios from "axios"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    base: BaseServiceInterface;
}

export const serviceProvider = (token: string | null): ServiceProviderInterface => {
    const client = axios.create({
        // baseURL: 'http://localhost:3333/api/v1/account/', //Local
        baseURL: 'http://localhost:7878/api/v1/broker', //Test
         headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return {
        base: new BaseService(client),
    }
}