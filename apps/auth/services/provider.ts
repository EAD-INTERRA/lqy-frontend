import axios from "axios"
import { type LoginServiceInterface, LoginService } from "./LoginService"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    login: LoginServiceInterface;
    base: BaseServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const auth = axios.create({
        baseURL: 'http://localhost:3333/api/v1/account/',
    })
    const base = axios.create({
        baseURL: 'http://localhost:3333/api/v1/'
    })
    return {
        login: new LoginService(auth),
        base: new BaseService(base)
    }
}