import axios from "axios"
import { type ShareholderServiceInterface, ShareholderService } from "./ShareholderService"
import { type MarginServiceInterface, MarginService } from "./MarginService"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    shareholder: ShareholderServiceInterface;
    margin: MarginServiceInterface;
    base: BaseServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const base = axios.create({
        // baseURL: 'http://localhost:3333/api/v1/account/', //Local
        // baseURL: 'http://131.226.242.233:5500/api/v1/', //Test
        baseURL: 'https://lqy-adminapi.interranetworks.com/api/v1/', //Test
    })
    const client = axios.create({
        // baseURL: 'http://localhost:4444/api/v1/' //Local
        baseURL: 'https://lqy-adminapi.interranetworks.com/api/v1/' //TEST
    })
    return {
        shareholder: new ShareholderService(client),
        margin: new MarginService(client),
        base: new BaseService(base),
    }
}