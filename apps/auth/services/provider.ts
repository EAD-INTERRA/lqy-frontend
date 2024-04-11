import axios from "axios"
import { type AuthServiceInterface, AuthService } from "./AuthService"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    auth: AuthServiceInterface;
    base: BaseServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const auth = axios.create({
        // baseURL: 'http://localhost:3333/api/v1/account/', //Local
        baseURL: 'http://localhost:3333/api/v1/account', //Test
    })
    const base = axios.create({
        baseURL: 'http://localhost:3333/api/v1/'
    })
    return {
        auth: new AuthService(auth),
        base: new BaseService(base)
    }
}