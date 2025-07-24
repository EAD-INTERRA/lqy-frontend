import axios from "axios"
import { type AuthServiceInterface, AuthService } from "./AuthService"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    auth: AuthServiceInterface;
    base: BaseServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const auth = axios.create({
        // baseURL: 'https://131.226.242.233:5500/api/v1/account/' //LOCAL
        baseURL: 'https://lqy-authapi.interranetworks.com/api/v1/account/'//TEST
    })
    const base = axios.create({
        // baseURL: 'https://131.226.242.233:5500/api/v1/', //LOCAL
        baseURL: 'https://lqy-authapi.interranetworks.com/api/v1/'  //TEST
    })
    return {
        auth: new AuthService(auth),
        base: new BaseService(base)
    }
}