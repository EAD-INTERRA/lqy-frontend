import axios from "axios"
import { type BaseServiceInterface, BaseService } from "./BaseService"
import { type AuthServiceInterface, AuthService } from "./AuthService"

export interface ServiceProviderInterface {
    base: BaseServiceInterface;
    auth: AuthServiceInterface;
}

export const serviceProvider = (token): ServiceProviderInterface => {
    const client = axios.create({
        baseURL: 'https://lqy-brokerapi.interranetworks.com/api/v1/broker', //Test  
        // baseURL: 'http://131.226.242.233:5555/api/v1/broker', //Local
    })

    const auth = axios.create({
        // baseURL: 'https://131.226.242.233:5500/api/v1/account/' //LOCAL
        baseURL: 'https://lqy-authapi.interranetworks.com/api/v1/'//TEST
    })
    return {
        base: new BaseService(client),
        auth: new AuthService(auth)
    }
}