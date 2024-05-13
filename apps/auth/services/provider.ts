import axios from "axios"
import { type AuthServiceInterface, AuthService } from "./AuthService"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    auth: AuthServiceInterface;
    base: BaseServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const auth = axios.create({
        // baseURL: 'http://131.226.242.233:5500/api/v1/account/' //TEST
        baseURL: 'http://localhost:3333/api/v1/account', //LOCAL
    })
    const base = axios.create({
        baseURL: 'http://localhost:3333/api/v1/'
        // baseURL: 'http://131.226.242.233:5500/api/v1/', //TEST
    })
    return {
        auth: new AuthService(auth),
        base: new BaseService(base)
    }
}