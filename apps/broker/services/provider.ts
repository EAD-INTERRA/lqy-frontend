import axios from "axios"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    base: BaseServiceInterface;
}

export const serviceProvider = (token): ServiceProviderInterface => {
    const client = axios.create({
        baseURL: 'https://lqy-brokerapi.interranetworks.com/api/v1/broker', //Test  
        // baseURL: 'http://131.226.242.233:5555/api/v1/broker', //Local
    })
    return {
        base: new BaseService(client),
    }
}